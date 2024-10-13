import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmitChat } from "../validation/generate";

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

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setName("");
        setDescription("");
        setBudget("");
        setObjetive("");
    };

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [objetive, setObjetive] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitGpt = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        await handleSubmitChat(event, name, description, budget, objetive, setName, setDescription, setBudget, setObjetive);
        setIsLoading(false);
    };

    return (
        <div className="relative flex flex-col justify-between h-screen bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">

            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-800 flex justify-center items-center">
                <p className="text-center text-white">Generador de propuestas</p>
            </div>

            <div className="relative flex-grow mb-4 rounded-lg bg-gray-800">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                    <button className="transition duration-300 transform hover:scale-105 bg-green-500 text-white py-0.5 px-2 text-sm rounded hover:bg-green-700">
                        Descargar
                    </button>
                    <button className="transition duration-300 transform hover:scale-105 bg-blue-500 text-white py-0.5 px-2 text-sm rounded hover:bg-blue-700">
                        Enviar
                    </button>
                    <button className="transition duration-300 transform hover:scale-105 bg-yellow-500 text-white py-0.5 px-2 text-sm rounded hover:bg-yellow-700">
                        Copiar
                    </button>
                </div>
                <textarea
                    className="w-full h-full p-4 pt-12 text-white bg-transparent border-none resize-none outline-none"
                    placeholder=" Tus propuesta se veran aquí..."
                ></textarea>
            </div>

            <div className="flex justify-center mb-4">
                <button onClick={toggleModal} className="transition duration-300 transform hover:scale-105 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Generar Propuesta
                </button>
            </div>
            {isOpen && (
                <div
                    id="authentication-modal"
                    aria-hidden="true"
                    className="bg-gray-100 bg-opacity-50 formPer fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
                >
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-gray-900 rounded-lg shadow-lg">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                data-modal-hide="authentication-modal"
                                onClick={toggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-white">
                                    Generador GPT
                                </h3>

                                <p
                                    id="MensajeErrCat"
                                    className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                                ></p>
                                <p
                                    id="MensajeCat"
                                    className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                                ></p>
                                <form onSubmit={handleSubmitGpt} className="space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Nombre del Proyecto</label>
                                        <input value={name}
                                            onChange={(e) => setName(e.target.value)} type="text" className="bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Nombre del proyecto o servicio" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Descripción del Proyecto</label>
                                        <textarea value={description}
                                            onChange={(e) => setDescription(e.target.value)} className="bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Describe brevemente el proyecto..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Presupuesto Aproximado</label>
                                        <input value={budget}
                                            onChange={(e) => setBudget(e.target.value)} type="text" className="bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Presupuesto en USD" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-white">Objetivos del proyecto</label>
                                        <textarea value={objetive}
                                            onChange={(e) => setObjetive(e.target.value)} className="bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Objetivos del proyecto..."></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 transform hover:scale-105" disabled={isLoading} >
                                            {isLoading ? "Generando..." : "Generar propuesta"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Generate;
