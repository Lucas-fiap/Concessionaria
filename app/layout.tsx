'use client';

import React, { useState } from 'react';
import './globals.css';
import { carrosData } from '@/data/carrosData';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isComprarOpen, setIsComprarOpen] = useState(false);
    const [isVenderOpen, setIsVenderOpen] = useState(false);

    const toggleComprarMenu = () => setIsComprarOpen(!isComprarOpen);
    const toggleVenderMenu = () => setIsVenderOpen(!isVenderOpen);

    return (
        <html lang="pt-br">
            <body>
                <header className="header">
                    <div className="menu-left">
                        <h1>Tech Concessionária</h1>
                    </div>
                    <nav>
                        <a href="/" className="menu-item">Página Inicial</a>
                        <div className="dropdown">
                            <a href="#comprar" className="menu-item" onClick={toggleComprarMenu}>Comprar</a>
                            {isComprarOpen && (
                                <div className="dropdown-content">
                                    <a href="#carroNovo">Carro Novo</a>
                                    <a href="#carroUsado">Carro Usado</a>
                                </div>
                            )}
                        </div>
                        <div className="dropdown">
                            <a href="#vender" className="menu-item" onClick={toggleVenderMenu}>Vender</a>
                            {isVenderOpen && (
                                <div className="dropdown-content">
                                    <a href="#carroNovoVender">Carro Novo</a>
                                    <a href="#carroUsadoVender">Carro Usado</a>
                                </div>
                            )}
                        </div>
                        <a href="#contato" className="menu-item">Contato</a>
                    </nav>
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <p>&copy; 2025 Tech Concessionária | <a href="#contato">Contato</a></p>
                </footer>
            </body>
        </html>
    );
}
