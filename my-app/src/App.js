import './App.css'
import { useState } from 'react'
import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AppBar,
  Toolbar,
} from '@mui/material'
import Addportfolio from './appboxes/Addportfolio'
import Greenbox from './appboxes/Greenbox'
import RedBox from './appboxes/RedBox'
import Monthlysavings from './appboxes/Monthlysavings'
import Expensesbycategory from './appboxes/Expensesbycategory'

function App() {
  const [date, setdate] = useState('')
  const [desc, setdesc] = useState('')
  const [cat, setcat] = useState('')
  const [amount, setamount] = useState('')
  const [transactions, settransactions] = useState([])
  const [sum, setsum] = useState(0)
  const [sums, setsums] = useState(0)
  const [food, setfood] = useState(0)
  const [travel, settravel] = useState(0)
  const [bills, setbills] = useState(0)
  const [others, setothers] = useState(0)

  const addamount = () => {
    setsum(prev => prev + Number(amount))
  }

  const cutamount = () => {
    setsums(prev => prev + Number(amount))
  }

  const add = () => {
    if (!date || !desc || !cat || !amount) {
      alert('Insufficient Information')
      return
    }

    if (Number(amount) < 0) {
      const newSums = sums + Number(amount)
      if (sum < Math.abs(newSums)) {
        alert('Insufficient Balance')
        return
      }
    }

    const amt = Math.abs(Number(amount))
    const ca = cat
    const newtransactions = { date, desc, cat, amount }

    settransactions(prev => [...prev, newtransactions])

    if (Number(amount) >= 0) {
      addamount()
    } else {
      cutamount()
      if (ca.toLowerCase() === 'food') setfood(prev => prev + amt)
      else if (ca.toLowerCase() === 'travel') settravel(prev => prev + amt)
      else if (ca.toLowerCase() === 'bills') setbills(prev => prev + amt)
      else setothers(prev => prev + amt)
    }

    setdate('')
    setdesc('')
    setcat('')
    setamount('')
  }

  return (
    <Box sx={{ backgroundColor: '#f4f6fd', minHeight: '100vh' }}>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Personal Finance Dashboard
          </Typography>
          <Typography variant="subtitle2">Track income, expenses and savings</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Greenbox amount={sum} />
          </Grid>

          <Grid item xs={12} md={4}>
            <RedBox amount={Math.abs(sums)} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Monthlysavings sums={sums} sum={sum} />
          </Grid>

          <Grid item xs={12}> 
            <Expensesbycategory others={others} food={food} bills={bills} travel={travel} />
          </Grid>

          <Grid item xs={12}> 
            <Addportfolio
              add={add}
              date={date}
              desc={desc}
              cat={cat}
              amount={amount}
              setdate={setdate}
              setcat={setcat}
              setamount={setamount}
              setdesc={setdesc}
            />
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Transaction History
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {transactions.length > 0 ? (
                      transactions.map((t, i) => (
                        <TableRow key={i}>
                          <TableCell>{t.date}</TableCell>
                          <TableCell>{t.desc}</TableCell>
                          <TableCell>{t.cat}</TableCell>
                          <TableCell align="right">{t.amount}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          No transactions yet. Add one to get started.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App;
