import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"65px"}}>
        <Typography variant='h2'>Registration</Typography>
        <TextField variant='outlined' label='Enter first name'/><br/><br/>
        <TextField variant='outlined' label='Enter middle name'/><br/><br/>
        <TextField variant='outlined' label='Enter last name'/><br/><br/>
        <TextField variant='outlined' type='number'label='Enter number'/><br/><br/>
        <TextField variant='outlined' type='email' label='E-mail'/><br/><br/>
        <Button variant='contained' color='error'>SUBMIT</Button>
        
    </div>
  )
}

export default Registration