import Link from 'next/link';
import { carrosData } from '../data/carrosData';

export default function ListaCarros() {
    return (
        <div className="carro-lista">
            {carrosData.map((carro) => (
                <div key={carro.id} className="carro-item">
                    <img src={carro.foto} alt={carro.modelo} />
                    <h3>{carro.modelo}</h3>
                    <p>{carro.descricao}</p>
                    <Link href={`/detalhesCarro/${carro.id}`} passHref>
                        <a className="carro-preco">Ver detalhes</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}
