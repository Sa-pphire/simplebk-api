import express from 'express'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

// Routes
app.use('/api/v1', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
