
function Verification() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white flex flex-col items-center justify-center">

            <header className="flex flex-col items-center text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-500 mb-2">
                    Verificación de Correo Electrónico
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-md">
                    Ingresa tu correo electrónico para recibir un enlace de verificación.
                </p>
            </header>

            <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                        Correo
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingresa tu correo"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
                >
                    Enviar
                </button>
                <p className="text-center text-gray-400 mt-4">
                    ¿Ya verificaste tu cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión</a>
                </p>
            </form>
        </div>
    );
}

export default Verification;
