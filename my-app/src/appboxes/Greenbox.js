import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const Greenbox = ({ amount }) => {
  return (
    <Card sx={{ backgroundColor: 'green', color: 'white', minWidth: 250, minHeight: 175 }} elevation={6}>
      <CardContent>
        <Typography variant="h6">Income</Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>
          +{Number(amount).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Greenbox
