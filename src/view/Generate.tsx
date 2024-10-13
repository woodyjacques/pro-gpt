import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Generate() {

    const navigate = useNavigate();

    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return (
        <div className="relative flex flex-col justify-between h-screen bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">

            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-800 flex justify-center items-center">
                <p className="text-center text-white">Generador de propuestas</p>
            </div>

            <div className="relative flex-grow mb-4 rounded-lg bg-gray-800">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                    <button className="transition duration-300 transform hover:scale-105 bg-green-600 text-white py-0.5 px-2 text-sm rounded hover:bg-green-700">
                        Descargar
                    </button>
                    <button className="transition duration-300 transform hover:scale-105 bg-blue-600 text-white py-0.5 px-2 text-sm rounded hover:bg-blue-700">
                        Enviar por correo
                    </button>
                    <button className="transition duration-300 transform hover:scale-105 bg-yellow-600 text-white py-0.5 px-2 text-sm rounded hover:bg-yellow-700">
                        Copiar
                    </button>
                </div>
                <textarea
                    className="w-full h-full p-4 pt-12 text-white bg-transparent border-none resize-none outline-none"
                    placeholder="Escribe tu propuesta aquí..."
                ></textarea>
            </div>

            <div className="flex justify-center mb-4">
                <button className="transition duration-300 transform hover:scale-105 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Generar Propuesta
                </button>
            </div>
        </div>
    );
}

export default Generate;
