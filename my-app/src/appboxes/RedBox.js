import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const RedBox = ({ amount }) => {
  return (
    <Card sx={{ backgroundColor: 'red', color: 'white', minWidth: 250, minHeight: 175 }} elevation={6}>
      <CardContent>
        <Typography variant="h6">Expenses</Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>
          -{Number(amount).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RedBox
