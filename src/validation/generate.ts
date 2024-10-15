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
    setObjetive: React.Dispatch<React.SetStateAction<string>>,
    animateText: (text: string) => void
) => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrCat");

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
        const userSession = localStorage.getItem("USER_SESSION");
        let email = '';

        if (userSession) {
            const userData = JSON.parse(userSession);
            email = userData.email;
        }

        const responseRegister = await axios.post(`${api}/chat-gpt`, { name, description, budget, objetive, email });
        const mensaje = responseRegister.data.message;
        animateText(mensaje);
        return true;
    } catch (error) {
        if (error instanceof Error) {
            const message = (error as any).response?.data.message;
            console.error("Error al generar la propuesta:", message);
            mostrarMensaje(message, MensajeErr);
        } else {
            console.error("Error desconocido:", error);
        }
        resetForm();
        return false;
    }
};

export const handleSubmitEmailChat = async (
    displayedText: string,
    recipientEmail: string
) => {

    const MensajeAct = document.getElementById("MensajeActChat");

    try {
        const userSession = localStorage.getItem("USER_SESSION");
        let emailUser = '';

        if (userSession) {
            const userData = JSON.parse(userSession);
            emailUser = userData.email;
        }

        const responseRegister = await axios.post(`${api}/emailpro`, {
            text: displayedText,
            email: recipientEmail,
            emailUser: emailUser
        });

        mostrarMensaje(responseRegister.data.message, MensajeAct);
        return true;
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
        return false;
    }

};

export async function obtenerPropuestas() {
    try {
        const userSession = localStorage.getItem("USER_SESSION");
        let emailUser = '';

        if (userSession) {
            const userData = JSON.parse(userSession);
            emailUser = userData.email;
        }

        const response = await axios.get(`${api}/chat-gpt/${emailUser}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function handleClickEl(cate: any) {
    const id = cate.id;
    const MensajeNegToast = document.getElementById("toast-negative");

    axios
        .delete(`${api}/chat-gpt/${id}`)
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            if (error.response) {
                mostrarMensaje(error.response.data.error, MensajeNegToast);
            }
        });
}


