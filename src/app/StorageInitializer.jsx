'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, RefreshCw, Database, Folder } from 'lucide-react';
import { initializeStorage, createBucketIfNotExists, ensureBucketExists, supabase } from '../lib/supabase';

const StorageInitializer = ({ children }) => {
    const [storageStatus, setStorageStatus] = useState({
        initialized: false,
        loading: true,
        error: null,
        bucketExists: false,
        bucketCreated: false
    });

    const [bucketInfo, setBucketInfo] = useState(null);

    const checkStorageStatus = async () => {
        setStorageStatus(prev => ({ ...prev, loading: true, error: null }));

        try {
            console.log('🔍 Verificando status do storage...');

            // 1. Verificar conexão com Supabase
            const { data: { user }, error: authError } = await supabase.auth.getUser();
            console.log('Conexão Supabase:', authError ? 'ERRO' : 'OK');

            // 2. Listar buckets existentes
            const { data: buckets, error: listError } = await supabase.storage.listBuckets();
            
            if (listError) {
                throw new Error(`Erro ao listar buckets: ${listError.message}`);
            }

            console.log('📁 Buckets existentes:', buckets.map(b => b.name));

            // 3. Verificar se o bucket 'curriculos' existe
            const curriculosBucket = buckets.find(bucket => bucket.name === 'curriculos');
            
            if (curriculosBucket) {
                console.log('✅ Bucket "curriculos" encontrado:', curriculosBucket);
                setBucketInfo(curriculosBucket);
                setStorageStatus({
                    initialized: true,
                    loading: false,
                    error: null,
                    bucketExists: true,
                    bucketCreated: false
                });
            } else {
                console.log('❌ Bucket "curriculos" não encontrado');
                setStorageStatus({
                    initialized: false,
                    loading: false,
                    error: null,
                    bucketExists: false,
                    bucketCreated: false
                });
            }

        } catch (error) {
            console.error('❌ Erro ao verificar storage:', error);
            setStorageStatus({
                initialized: false,
                loading: false,
                error: error.message,
                bucketExists: false,
                bucketCreated: false
            });
        }
    };

    const initializeCompleteStorage = async () => {
        setStorageStatus(prev => ({ ...prev, loading: true, error: null }));

        try {
            console.log('🚀 Inicializando storage completo...');
            
            const result = await initializeStorage();
            
            if (result.success) {
                console.log('✅ Storage inicializado com sucesso!');
                await checkStorageStatus();
            } else {
                throw new Error(result.error?.message || result.message || 'Erro na inicialização');
            }

        } catch (error) {
            console.error('❌ Erro na inicialização:', error);
            setStorageStatus(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
        }
    };

    useEffect(() => {
        checkStorageStatus();
    }, []);

    // Se o storage está inicializado, renderizar os children normalmente
    if (storageStatus.initialized) {
        return (
            <>
                <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={20} />
                        <span className="text-green-800 text-sm font-medium">Storage OK</span>
                    </div>
                </div>
                {children}
            </>
        );
    }

    // Interface de configuração do storage
    return (
        {children}
    );
};

export default StorageInitializer;