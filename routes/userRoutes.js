import findOrders from '../controllers/findOrders.js'
import deleteOrder from '../controllers/deleteOrder.js'
import updateSeller from '../controllers/updateSeller.js'
import authMiddleware from '../helpers/basicAuth.js'
import { Router } from 'express'

const router = Router()

router.get('/order_items', authMiddleware, findOrders)

router.delete('/order_items/:id', authMiddleware, deleteOrder)

router.put('/account', authMiddleware, updateSeller)

export default router
