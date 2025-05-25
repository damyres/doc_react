import { useState } from "react"

export default function MeuBotao({count, onClick}) {
 
    return (
        <button onClick={onClick}>
            clicado {count} vezes
        </button>
    )
}


