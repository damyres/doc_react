const products = [
    { title: 'Repolho', id: 1 },
    { title: 'Maça', id: 2 },
    { title: 'Alho', id: 3 },
]
const listaItens = products.map(product =>
    <li key={product.id}>
        {product.title}

    </li>
)
export default function Listas() {
    return (
        <ul>{listaItens}</ul>
    )

}
