import featuredController from '../controllers/featuredController/index.js'
import { Router } from 'express'

const router = Router()

router.post('/', featuredController.create)

router.get('/', featuredController.getAll)

router.get('/:id', featuredController.get)

router.delete('/delete/:id', featuredController.deleteFeatured)

router.put('/update/:id', featuredController.update)

export default router

