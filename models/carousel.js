import client from '../config/db.js'

const Carousel = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const carousel = database.collection('carousel')

    return carousel
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Carousel
