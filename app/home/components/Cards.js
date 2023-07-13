import Image from "next/image";
import Link from "next/link";

export const Cards = ({ data }) => {
  const {id ,status, name, image, species, gender } = data;
  return (
    <div className="w-[300px] shadow-lg mx-auto">
      <div className="relative inline-block">
        <Image src={image} alt="" width={300} height={200} />
        <div
          className={`absolute top-2 right-3 rounded-md text-white font-bold text-sm  px-2 ${
            status === "Alive"
              ? "bg-green-500"
              : status === "Dead"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        >
          {status}
        </div>
      </div>
      <div className="p-5 -mt-2 bg-white">
        <p className="text-center font-bold text-2xl">{name}</p>
        <p>Especie: {species}</p>
        <p>Genero: {gender==="Male" ? "Hombre": "Mujer" }</p>
        <Link href={`home/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};
