import fs from 'fs'
import csv from 'csv-parser'
import client from '../config/db.js'

const uploadCsv = async function (req, res, path, name) {
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    const csvPath = path
    const collectionName = name
    const db = client.db()
    const collection = db.collection(collectionName)
    const records = []

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        records.push(data)
      })
      .on('end', async () => {
        if (records.length > 0) {
          await collection.insertMany(records)
          console.log(`Inserted ${records.length} records into the ${collectionName} collection`)
        } else {
          console.log('No records to insert.')
        }
      })
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default uploadCsv
