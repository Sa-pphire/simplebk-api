import client from '../config/db.js'

const Products = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const products = database.collection('products')

    return products
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Products
