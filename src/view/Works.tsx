import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Works() {
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
    <div className=" bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-800 flex items-center justify-between">
        <form className="w-full">
          <div className="relative w-full">
            <p className="text-center text-white mb-2">Historial de propuestas</p>
            <input
              type="search"
              id="default-search"
              className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Buscar"
              required
            />
          </div>
        </form>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Descargar
              </th>
              <th scope="col" className="px-6 py-3">
                Enviar por correo
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Works;
