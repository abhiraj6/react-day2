import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"65px"}}>
        <Typography variant='h3'>login</Typography><br/>
        <TextField label='Enter name' variant='outlined'/><br/><br/>
        <TextField label='Enter password' varient='outlined' type='password'/><br/><br/>
        <Button variant='contained' color='error'>submit</Button>
    </div>
  )
}

export default Login