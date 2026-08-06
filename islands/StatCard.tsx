interface StatCardProps {
    titulo: string;
    valor: number | string;
    cor?: string;
}

export default function StatCard(props: StatCardProps) {
    return (
        <div class="card statusCard">
            <div>
                <small>{props.titulo}</small>
                <h2>{props.valor}</h2>
            </div>
        </div>
    );
}