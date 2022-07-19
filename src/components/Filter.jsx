import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Select } from '@chakra-ui/react'

export default function Filter() {
  const navigate = useNavigate()
  return (
    // http://localhost:8080/products?gender=MEN
    <Flex justifyContent="space-around">

      <Select width="200px" alignItems="center" placeholder='GENDER'>
        <option value='option1'>Men</option>
        <option value='option2'>Women</option>
      </Select>

      <Select width="200px" alignItems="center" placeholder='PRICE'>
        <option value='option1'>Hight-Low</option>
        <option value='option2'>Low-High</option>
      </Select>

    </Flex>
  )
}
