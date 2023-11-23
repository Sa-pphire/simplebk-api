import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI

const client = new MongoClient(URI, {
  tls: true
})

export default client
