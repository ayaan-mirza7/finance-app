import React from 'react'
import { Card, CardContent, LinearProgress, Typography, Box } from '@mui/material'

const Monthlysavings = (props) => {
  const total = Number(props.sum) + Number(props.sums)
  const goal = Math.abs(Number(props.sum)) || 1
  const percentage = total > 0 && props.sum > 0 ? Math.min((total / goal) * 100, 100) : 0

  return (
    <Card sx={{ width: 550, mt: 3, ml: 6 }} elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Total Savings</Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          {total}/{goal}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={percentage} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default Monthlysavings
