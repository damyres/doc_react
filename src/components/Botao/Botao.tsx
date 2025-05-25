import { useState } from "react";

export function Botao() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleClick}>clicado {count} vezes</button>
            <p>Botão com função de click, mas contador usando o estado inicial do botão que é zero.</p>
        </>
    )
}