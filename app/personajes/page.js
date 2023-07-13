"use client"

import { Footer } from "@/components/Footer"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Personajes() {
    const router = useRouter()
    const [contador, setContador] = useState(0)
    const sumar = () =>{
        setContador(contador+1)
    }

    const redireccionar = () =>{
        router.push("/home")
    }
    return(
      <div>
            <button onClick={sumar}>Hola</button>
            <button onClick={redireccionar}>Redireccionar</button>
            {contador}
            <Footer />
      </div>
    )
}