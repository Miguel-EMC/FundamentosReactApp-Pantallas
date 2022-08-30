import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MensajeValidacion from './MensajeValidacion'

const Formulario = ({vehiculo}) => 
{

  const navigate = useNavigate()

  const [error, setError] = useState(false)

  const [form, setForm] = useState({
      marca:     vehiculo?.marca ?? "",
      propietario:vehiculo?.propietario ??"",
      email:      vehiculo?.email ?? "",
      fecha:      vehiculo?.fecha ??"",
      telefono:   vehiculo?.telefono ??"",
      reparaciones:   vehiculo?.reparaciones ??""
  })

  const handleChange = (e) =>
  {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

    const handleSubmit = async(e) =>
    {
      e.preventDefault()
      if(Object.values(form).includes(""))
      {
        console.log("error");
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2500);
        return
      }

      if(vehiculo?.id)
      {
        const url = `http://localhost:4000/vehiculos/${vehiculo.id}`
        const peticion = await fetch(url,{
            method:'PUT',
            body:JSON.stringify(form),
            headers:{'Content-Type':'application/json'}
        })
        const respuesta = await peticion.json()
        navigate('/vehiculos')
      }
      else
      {
        try {
          
          const url = "http://localhost:4000/vehiculos"
          const peticion = await fetch(url,{
              method:'POST',
              body:JSON.stringify(form),
              headers:{'Content-Type':'application/json'}
          })
          const respuesta = await peticion.json()
          navigate('/vehiculos')
  
        } catch (error) {
          console.log(error);
        }
      }

    }


  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
        
    <h1 className='text-gray-800 font-bold uppercase text-center text-xl mb-4'>
      {vehiculo?.id ? <p>Actualizar vehiculo</p> : <p>Registrar vehiculo</p>}
    </h1>

    {
      error && <MensajeValidacion tipo={'bg-red-700'}>Existen campos vacíos</MensajeValidacion>
    }

    <form onSubmit={handleSubmit}>
        <div>
          <label 
          htmlFor='marca'
          className='text-gray-700 uppercase font-bold'>Marca del Vehiculo: </label>
          <input 
          id='marca'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='marca del vehiculo'
          name='marca'
          value={form.marca}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='propietario'
          className='text-gray-700 uppercase font-bold'>Nombre del propietario: </label>
          <input 
          id='propietario'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='marca del vehiculo'
          name='propietario'
          value={form.propietario}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='email'
          className='text-gray-700 uppercase font-bold'>Email del propietario: </label>
          <input 
          id='email'
          type="email" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='email de contacto'
          name='email'
          value={form.email}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='telefono'
          className='text-gray-700 uppercase font-bold'>Teléfono: </label>
          <input 
          id='telefono'
          type="tel" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          name='telefono'
          value={form.telefono}
          onChange={handleChange}
          />
        </div>
        <div>
          <label 
          htmlFor='fecha'
          className='text-gray-700 uppercase font-bold'>Fecha de ingreso: </label>
          <input 
          id='fecha'
          type="date" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          name='fecha'
          value={form.fecha}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='reparaciones'
          className='text-gray-700 uppercase font-bold'>Reparaciones: </label>
          <textarea 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='Describe los reparaciones'  
          name='reparaciones'
          value={form.reparaciones}
          onChange={handleChange}/>
        </div>

        <input 
        id='reparaciones'
        type="submit"
        className='bg-sky-800 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-sky-900 cursor-pointer transition-all'
        value={vehiculo?.id ? 'Actualizar vehiculo' : 'Registrar vehiculo'} 
        />

      </form>
    </div>
  )
}

export default Formulario

