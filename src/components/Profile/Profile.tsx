const user = {
    name: 'Merlyn'
};

 function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <p>Sou um componente usuário para exibir o nome utilizando variáveis</p>
        </>
    )

}

export default function Gallery() {
    return(
        <section>
            <h1>Cientistas incríveis</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    
    )

}

