"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Typewriter from 'typewriter-effect'
export const Banner = () =>{
    const router = useRouter()
    const irAplicativo = () =>{
        router.push("/home")
    }

    return(
        <section className="bg-gray-100">
            <article className="container mx-auto grid grid-cols-2 items-center py-5 h-full">
                <div className="space-y-2 mx-auto">
                 <Typewriter
                 options={{
                    strings: ['Soy un desarrllador Front - End', "Mi nombre es Martin"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "font-bold text-2xl"                    
                 }}
                 />
                <h1 className='font-bold text-5xl'>Aplicativo Rick and Morty</h1>
                <p>Hola revisa mi aplicativo :3</p>
                <button className='bg-green-500 text-white p-2 rounded-md w-1/2' onClick={irAplicativo}>Ver Aplicativo</button>
                </div>
                <Image src="/fondo1.png" alt='Rick and Morty' width={500} height={500} />
            </article>
        </section>
    )
}