import carouselController from '../controllers/carouselController/index.js'
import { Router } from 'express'

const router = Router()

router.post('/', carouselController.create)

router.get('/', carouselController.getAll)

router.get('/:id', carouselController.get)

router.delete('/delete/:id', carouselController.deleteCarousel)

router.put('/update/:id', carouselController.update)

export default router

