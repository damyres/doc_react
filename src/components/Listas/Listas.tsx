const products = [
    { title: 'Repolho', isFruit: false, id: 1 },
    { title: 'Maça', isFriit: true, id: 2 },
    { title: 'Alho', isFruit: false, id: 3 },
    { title: 'Banana', isFruit: true, id: 4 },
    { title: 'Laranja', isFruit: true, id: 5 },
];

export default function Listas() {
    const listItems = products.map(product =>
        <li key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'green'
            }}
        >
            {product.title}
        </li>
    );
    return (
        <>
            <ul>
            {listItems}
        </ul>
        <p>Transformando array de produtos em array de itens</p>
        </>
    
    )
}
