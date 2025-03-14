import React from 'react';
import Link from 'next/link';
import { carrosData } from '@/data/carrosData';

export default function Home() {
    return (
        <div>
            <div className="carro-lista">
                {carrosData.map(carro => (
                    <div className="carro-item" key={carro.id}>
                        <img src={carro.foto} alt={carro.modelo} />
                        <div className="carro-detalhes">
                            <h3>{carro.modelo}</h3>
                            <p>{carro.descricao}</p>
                            <div className="carro-preco">R$ {carro.preco.toLocaleString('pt-BR')}</div>
                            <Link href={`/carros/${carro.id}`} className="detalhes-link">
                                Ver Detalhes
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
