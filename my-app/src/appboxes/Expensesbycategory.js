import React from 'react'
import { Card, CardContent, Typography, Box, Grid } from '@mui/material'

const Expensesbycategory = ({ food, travel, bills, others }) => {
  const total = food + travel + bills + others || 1
  const foodDeg = (food / total) * 360
  const travelDeg = (travel / total) * 360
  const billsDeg = (bills / total) * 360

  return (
    <Card sx={{ width: 700, mt: 3, ml: 4, p: 2 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" mb={2}>Expenses by category</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                background: `conic-gradient(
                  red 0deg ${foodDeg}deg,
                  green ${foodDeg}deg ${travelDeg + foodDeg}deg,
                  blue ${travelDeg + foodDeg}deg ${travelDeg + foodDeg + billsDeg}deg,
                  yellow ${travelDeg + foodDeg + billsDeg}deg 360deg
                )`,
              }}
            />
          </Grid>
          <Grid item>
            <Box sx={{ fontSize: 18 }}>
              <Typography>
                <span style={{ color: 'red' }}>●</span> Food: {food}
              </Typography>
              <Typography>
                <span style={{ color: 'green' }}>●</span> Travel: {travel}
              </Typography>
              <Typography>
                <span style={{ color: 'blue' }}>●</span> Bills: {bills}
              </Typography>
              <Typography>
                <span style={{ color: 'goldenrod' }}>●</span> Others: {others}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Expensesbycategory
