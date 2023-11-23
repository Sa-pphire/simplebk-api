import Orders from '../models/orders.js'

const deleteOrder = async function (req, res) {
  try {
    const sellerId = req.auth.user
    const orderId = req.params.id

    // Check if the order item exists and belongs to the logged-in seller
    const ordersCollection = await Orders()
    const order = await ordersCollection.findOne({
      orderId,
      sellerId
    })

    if (!order) {
      return res.status(404).json({
        status: 404,
        error: 'Order item not found or does not belong to the seller'
      })
    }

    // Delete the order item
    await ordersCollection.deleteOne({ orderId })

    res.status(200).json({
      status: 200,
      message: 'Order item deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default deleteOrder
