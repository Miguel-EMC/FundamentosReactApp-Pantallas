import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MostrarVehiculo = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [vehiculo, setVehiculo] = useState({})

  useEffect(() => 
  {

        const consultarVehiculo = async() => {
          try 
          {
            const peticion = await fetch(`http://localhost:4000/vehiculos/${url}`)
            const respuesta = await peticion.json()
            if(url == respuesta.id)
            {
              setVehiculo(respuesta)
            }
          } catch (error) 
          {
            console.log(error);
          }
      }
      consultarVehiculo()
  }, [])
  
  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Detalle del Vehiculo</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para mostrar el detall completo de un vehiculo</p>
      {
        Object.keys(vehiculo).length > 0 ?
        (
          <div  className='m-5 flex justify-between'>
            <div>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Marca del Vehiculo: </span>
                    {vehiculo.marca}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Nombre del propietario: </span>
                    {vehiculo.propietario}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Email: </span>
                    {vehiculo.email}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Fecha de atención: </span>
                    {vehiculo.fecha}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Reparaciones: </span>
                    {vehiculo.reparaciones}
                </p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/2138/2138440.png" alt="dogandcat" className='h-80 w-80'  />
            </div>
          </div>
        )
        :
        (
          <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese vehiculo</p>
        )
      }
    </div>
  )
}

export default MostrarVehiculo

