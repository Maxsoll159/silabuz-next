import { Footer } from "@/components/Footer"
import Image from "next/image"
import { Cards } from "./components/Cards"

export default async function Home(){
    const url = "https://rickandmortyapi.com/api/character"
    const respueta = await fetch(url)
    const data = await respueta.json()
    console.log(data)


    return(
        <div className="grid grid-cols-3 gap-5">
            {
                data.results.map((per)=>(
                    <Cards data={per} />
                ))
            }
        </div>
    )
}