import React from 'react'
import Formulario from '../components/Formulario'

const NuevoVehiculo = () => {
  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Agregar vehiculo</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Completa los siguientes campos para agregar un nuevo vehiculo</p>
      <Formulario/>
    </div>
  )
}

export default NuevoVehiculo

