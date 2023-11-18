import React from 'react'
import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

const FormularioCompra = () => {

  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [tarjeta, setTarjeta] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setNombre('')
    setDireccion('')
    setTarjeta('')
  }
  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <FormLabel>FORMULARIO DE COMPRA</FormLabel>
        <br />
        <FormControl>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormControl>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </label>
        <br />
        <FormErrorMessage>
          Número de tarjeta:
          <input
            type="text"
            value={tarjeta}
            onChange={(e) => setTarjeta(e.target.value)}
          />
        </FormErrorMessage>
        <br />
        <button type="submit">Realizar compra</button>
      </form>
    </FormControl>
  )
}

export default FormularioCompra
