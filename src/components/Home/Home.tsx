import { useState } from "react"
import { Botao } from "../Botao/Botao"
import MeuBotao from "../Botao/MeuBotao"
import Listas from "../Listas/Listas"
import Usuario from "../Usuario/Usuario"

export const Home = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Bem vindo ao meu aplicativo</h1>
            <Botao />
            <Botao />
            <Usuario />
            <Listas />

            <div>
                <h1>Contadores que atualiza os botões separadamente o estado atual dos botões</h1>
                <MeuBotao count={count} onClick={handleClick} />
                <MeuBotao count={count} onClick={handleClick} />
            </div>
        </>
    )
}