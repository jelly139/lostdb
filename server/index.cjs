const express = require('express')

const app = express()

const port = 5173

app.use(express.json())

app.listen(port, () => console.log (`Server running on port: ${port}`))
