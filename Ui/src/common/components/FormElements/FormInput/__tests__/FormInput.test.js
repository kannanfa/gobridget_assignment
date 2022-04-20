import React, {useState} from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import FormInput from '../index'

function TestInputWrapper() {
  const validationPattent = '^[A-Za-z0-9 ]+$'
  const [value, setValue] = useState('')
  const handleChange = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return  <FormInput 
  key={"search"} 
  id={"search"}
  name={"search"} 
  placeholder="Search here ...!"  
  pattern={validationPattent} 
  errorMessage={"Please use only letters, numbers and space"} 
  value={value} 
  onChange={handleChange} /> 
}

const setup = () => {
  const utils = render(<TestInputWrapper />)
  const input = utils.getByTestId('input-search')
  return {
    input,
    ...utils,
  }
}

test('It should update value moon', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'moon'}})
  expect(input.value).toBe('moon')
})

test('It should validate input pattent', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'moo$'}})
  expect(input).toBeInvalid()
})

