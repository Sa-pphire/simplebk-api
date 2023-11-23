import client from '../config/db.js'

const Orders = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const orders = database.collection('orders')

    return orders
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Orders
