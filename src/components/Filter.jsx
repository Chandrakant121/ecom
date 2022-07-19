// http://localhost:8080/products?gender=MEN

import React, { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/products/action'
import { useDispatch } from 'react-redux'

const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const [genderValue, setgenderValue] = useState(searchParams.getAll("gender") || [])

  const genderHandler = (values) => {
    console.log(values)
    setgenderValue(values)
  }
  useEffect(() => {
    if (genderValue) {
      setSearchParams({ gender: genderValue }, { replace: true })
      let params = {
        gender: searchParams.getAll("gender")
      }
      dispatch(fetchData(params))
    }
  }, [genderValue, setSearchParams, searchParams])

  return (
    <Box>
      <Box>
        <Text fontSize="2xl" align="center" fontWeight="bold" marginTop={2} >Filters</Text>
        <Text align="center" fontWeight="bold" margin={2} >Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={genderValue} onChange={genderHandler}>
          <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="space-around" fontWeight="bold" >
            <Checkbox value="MEN'">Men's</Checkbox>
            <Checkbox value="WOMEN'">Women's</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box >
  )
}

export default Filter
