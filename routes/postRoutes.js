import postController from '../controllers/postController/index.js'
import { Router } from 'express'

const router = Router()

router.post('/', postController.create)

router.get('/', postController.getAll)

router.get('/:id', postController.get)

router.delete('/delete/:id', postController.deletePost)

router.put('/update/:id', postController.update)

export default router