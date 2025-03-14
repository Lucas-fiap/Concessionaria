import { useRouter } from 'next/router';
import { carrosData } from '@/data/carrosData';
import Link from 'next/link';

export default function DetalhesCarro() {
    const router = useRouter();
    const { id } = router.query;

    const carro = carrosData.find((carro) => carro.id === Number(id));

    if (!carro) {
        return <p>Carro não encontrado.</p>;
    }

    return (
        <div className="detalhes-carro">
            <h2>{carro.modelo}</h2>
            <img src={carro.foto} alt={carro.modelo} className="carro-img"/>
            <div className="detalhes">
                <p><strong>Descrição:</strong> {carro.descricao}</p>
                <p><strong>Preço:</strong> R$ {carro.preco.toLocaleString('pt-BR')}</p>
                <p><strong>Especificações do Motor:</strong> 3.0 Turbo Diesel MHEV</p>

            </div>
            <Link href="/" className="voltar-link">Voltar</Link>
        </div>
    );
}
