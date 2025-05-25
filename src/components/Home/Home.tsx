import { Botao } from "../Botao/Botao"
import MeuBotao from "../Botao/MeuBotao"
import Listas from "../Listas/Listas"
import Usuario from "../Usuario/Usuario"

export const Home = () => {

    return (
        <>
            <h1>Bem vindo ao meu aplicativo</h1>
            <Botao />
            <Usuario />
            <Listas />

            <div>
            <h1>Contadores que atualiza os botões separadamente o estado atual dos botões</h1>
            <MeuBotao />
            <MeuBotao />
        </div>
        </>
    )
}