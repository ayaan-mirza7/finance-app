import React from 'react'
import { Box, Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material'

const Addportfolio = (props) => {
  return (
    <Card sx={{ mt: 2, p: 2, width: '100%' }} elevation={3}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5">New Transaction</Typography>
          <Button variant="contained" color="primary" onClick={props.add}>Add transaction</Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              label="Date"
              type="date"
              fullWidth
              value={props.date}
              onChange={e => props.setdate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Description"
              fullWidth
              value={props.desc}
              onChange={e => props.setdesc(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Category"
              fullWidth
              value={props.cat}
              onChange={e => props.setcat(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Amount"
              type="number"
              fullWidth
              value={props.amount}
              onChange={e => props.setamount(e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Addportfolio
