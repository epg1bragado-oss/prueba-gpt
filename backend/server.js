require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/resumen', (req, res) => {
  res.json({
    ventas: 12500000,
    ganancia: 2800000,
    comisiones: 450000
  })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Backend running on port ' + PORT))
