import { useState } from "react"

export default function MeuBotao() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            clicado {count} vezes
        </button>
    )
}


