import Image from "next/image"

export default async function PersonajeId({params}){
    const {id} = params
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const respueta = await fetch(url)
    const data = await respueta.json()
    console.log(data)
    return(
        <div>
            <p>Personaje #{id}</p>
            <Image src={data.image} alt={data.name} width={600} height={600}/>
            <p>Nombre {data.name}</p>

        </div>
    )
}