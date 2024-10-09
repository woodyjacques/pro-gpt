import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white flex flex-col items-center justify-center">
      
      <header className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">
          Inicia Sesión
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-md">
          Ingresa a tu cuenta y comienza a crear propuestas personalizadas en segundos.
        </p>
      </header>

      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
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
        <div className="mb-2 relative">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-10 text-gray-500 hover:text-gray-300 focus:outline-none"
          >
            {showPassword ? "Ocultar" : "Ver"}
          </button>
        </div>
        <div className="text-right mb-6">
          <a href="/verification" className="text-sm text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Iniciar Sesión
        </button>
        <p className="text-center text-gray-400 mt-4">
          ¿No tienes una cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
