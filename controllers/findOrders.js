import Orders from '../models/orders.js'

const findOrders = async function (req, res) {
  try {
    const sellerId = req.auth.user
    const limit = parseInt(req.query.limit) || 20
    const offset = parseInt(req.query.offset) || 0
    const sortBy = req.query.sortBy || 'shipping_limit_date'

    // finds order using the request params
    const ordersCollection = await Orders()
    const orders = await ordersCollection
      .find({ sellerId })
      .sort({ [sortBy]: 1 })
      .skip(offset)
      .limit(limit)
      .toArray()

    const total = await ordersCollection.countDocuments({ sellerId })

    const response = {
      data: orders.map((order) => ({
        id: order.order_id,
        product_id: order.product_id,
        product_category: order.product_category_name,
        price: order.price,
        date: order.shipping_limit_date
      })),
      total,
      limit,
      offset
    }

    res.status(200).json(response)
  } catch (error) {
    console.error('Error handling request:', error)
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default findOrders
