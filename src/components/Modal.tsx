'use client';
import React from 'react';
import { X } from 'lucide-react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed  inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
            <div className="bg-white border-amber-600 border-2 rounded-xl shadow-xl max-w-2xl w-full relative">
                <div className="flex bg-amber-600 justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
