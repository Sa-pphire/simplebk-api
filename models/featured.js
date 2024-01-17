import client from '../config/db.js'

const Featured = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const featured = database.collection('featured')

    return featured
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Featured
