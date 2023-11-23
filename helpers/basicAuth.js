import Sellers from '../models/seller.js'

const authMiddleware = async function (req, res, next) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).json({ error: 'Unauthorized - Basic Auth header missing or invalid' })
    }

    // Decode the base64-encoded credentials
    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    const [username, password] = credentials.split(':')
    req.auth = { user: username, pword: password }
    const { user, pword } = req.auth
    if (!user) {
      return res.status(400).json({
        status: 400,
        error: 'User is required'
      })
    }
    if (!pword) {
      return res.status(400).json({
        status: 400,
        error: 'Password is required'
      })
    }
    const sellersCollection = await Sellers()
    const seller = await sellersCollection.findOne({
      seller_id: user,
      seller_zip_code_prefix: pword
    })
    if (!seller) {
      return res.status(404).json({
        status: 404,
        error: 'Seller not found'
      })
    };
    next()
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default authMiddleware
