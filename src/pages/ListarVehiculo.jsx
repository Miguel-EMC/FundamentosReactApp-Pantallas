import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const ListarVehiculo = () => 
{

  const navigate = useNavigate()

  const [encontrado, setEncontrado] = useState([])
  const [vehiculos, setVehiculos] = useState([])
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => 
  {
      const consultarVehiculos = async() => {
         try 
         {
          
          const peticion = await fetch("http://localhost:4000/vehiculos")
          const respuesta = await peticion.json()
          setVehiculos(respuesta) 
          setEncontrado(respuesta)
         } catch (error) 
         {
           console.log(error);
         }
      }

      consultarVehiculos()

  }, [])


  const handleDelete = async (id) =>
  { 
      try 
        {
          const confirmar = confirm("Vas a aliminar un vehiculo")
          if(confirmar)
          {
              const url = `http://localhost:4000/vehiculos/${id}`
              const peticion = await fetch(url,{
                  method:'DELETE',
              })
              const nuevosVehiculos = vehiculos.filter(vehiculo => vehiculo.id !== id)
              setVehiculos(nuevosVehiculos)
          }
        }
        catch(error)
        {
          console.log(error);
        }
  }


  const handleChange = (e) => 
  {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("Busqueda: "+ e.target.value);
  }

  const filtrar = (busqueda) =>
  {
    var resultado = encontrado.filter(elemento => {
      if(elemento.marca.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
      elemento.propietario.toString().toLowerCase().includes(busqueda.toLowerCase())){
        return elemento;
      }
    });

    setVehiculos(resultado);
  }

  return (

    <div>
      <h1 className='font-black text-4xl text-sky-900'>Mostrar Vehiculos</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para listar todos los vehiculos que se han registrado</p>

      <div className="relative mt-3 w-max">
          <input type="search" 
            className="cursor-pointer relative z-10 h-12 w-12 rounded-full border-2 border-sky-900 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-sky-900 focus:pl-16 focus:pr-4" 
            placeholder="Buscar"
            value = {busqueda}
            onChange = {handleChange}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
      </div>

      <table className='w-full mt-5 table-auto shadow bg-white'>
            <thead className='bg-sky-900 text-white'>
                <tr>
                  <th className='p-2'>Marca del vehiculo</th>
                  <th className='p-2'>Nombre del propietario</th>
                  <th className='p-2'>Email</th>
                  <th className='p-2'>Teléfono</th>
                  <th className='p-2'>Fecha de atención</th>
                  <th className='p-2'>Reparaciones</th>
                  <th className='p-2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                  vehiculos.map(vehiculo => (
                    <tr key={vehiculo.id} className="border-b hover:bg-gray-100">
                        <td className='p-3'>{vehiculo.marca}</td>
                        <td className='p-3'>{vehiculo.propietario}</td>
                        <td className='p-3'>{vehiculo.email}</td>
                        <td className='p-3'>{vehiculo.telefono}</td>
                        <td className='p-3'>{vehiculo.fecha}</td>
                        <td className='p-3 '>{vehiculo.reparaciones}</td>
                        <td className='p-3'>

                        <button type='button' className='bg-sky-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl' onClick={() => navigate(`/vehiculos/detalle/${vehiculo.id}`)}>Visualizar</button>

                        <button type='button' className='bg-cyan-900 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2 rounded-xl' onClick={() => navigate(`/vehiculos/editar/${vehiculo.id}`)}>Editar</button>
                        
                        <button type='button' className='bg-red-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl'onClick={()=>{handleDelete(vehiculo.id)}}>Eliminar</button>

                        </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListarVehiculo
