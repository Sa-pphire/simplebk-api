import client from '../config/db.js'

const Sellers = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const sellers = database.collection('sellers')

    return sellers
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Sellers
