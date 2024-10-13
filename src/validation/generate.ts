import { FormEvent } from "react";
import { mostrarMensaje } from "../Components/toast";
import axios from "axios";
const api = "https://pro-gpt-backend.vercel.app";

export const handleSubmitChat = async (
    event: FormEvent,
    name: string,
    description: string,
    budget: string,
    objetive: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setBudget: React.Dispatch<React.SetStateAction<string>>,
    setObjetive: React.Dispatch<React.SetStateAction<string>>
) => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrCat");
    const MensajeAct = document.getElementById("MensajeCat");

    if (name === "") {
        mostrarMensaje("Ingrese el nombre", MensajeErr);
        return null;
    }

    if (description === "") {
        mostrarMensaje("Ingrese la descripción", MensajeErr);
        return null;
    }

    if (budget === "") {
        mostrarMensaje("Ingrese el presupuesto", MensajeErr);
        return null;
    }

    if (objetive === "") {
        mostrarMensaje("Ingrese el objetivo", MensajeErr);
        return null;
    }

    function resetForm() {
        setName("");
        setDescription("");
        setBudget("");
        setObjetive("");
    }

    try {
        const responseRegister = await axios.post(`${api}/chat-gpt`, { name, description, budget, objetive });
        const mensaje = responseRegister.data.message;
        mostrarMensaje(mensaje, MensajeAct);
        resetForm();
        return true;
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErr);
        resetForm();
        return false;
    }

};