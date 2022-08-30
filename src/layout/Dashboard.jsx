import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-sky-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white underline">
          Pinanjota's Mecanica
        </h2>

        <img
          src="https://i.ibb.co/YN3QVd6/Kevincita.png"
          alt="img-client"
          className="m-auto mt-4"
          width={120}
        />
        <hr className="mt-5 text-orange-900" />

        <ul className="mt-5 list-disc list-outside px-5">
          <li className="text-orange-900">
            <Link
              to="/vehiculos"
              className={`${
                urlActual === "/vehiculos"
                  ? "text-blue-300 underline"
                  : "text-white"
              } text-2xl block mt-2 hover:text-blue-200`}
            >
              Vehiculos
            </Link>
          </li>
          <li className="text-orange-900">
            <Link
              to="/vehiculos/nuevo"
              className={`${
                urlActual === "/vehiculos/nuevo"
                  ? "text-blue-300 underline"
                  : "text-white"
              } text-2xl block mt-2 hover:text-blue-200`}
            >
              Nuevo Vehiculo
            </Link>
          </li>
          <Link
            to="/"
            className=" text-white text-2xl block mt-4 hover:text-red-300 text-center bg-red-900 p-1 rounded-lg"
          >
            Salir
          </Link>
        </ul>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
