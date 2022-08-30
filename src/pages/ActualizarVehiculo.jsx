import React from 'react'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActualizarVehiculo = () => 
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
          console.log(respuesta);
          setVehiculo(respuesta)
        }
      } catch (error) 
      {
        console.log(error);
      }
    }
    consultarVehiculo()
  },[])
  
  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Actualizar vehiculo</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>En este módulo te permite actualizar los datos de un vehiculo</p>
      {
        Object.keys(vehiculo).length > 0 ?
          (
            <Formulario vehiculo={vehiculo}/>
          )
          :
          (
            <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese vehiculo</p>
          ) 
      }
    </div>
  )
}

export default ActualizarVehiculo

