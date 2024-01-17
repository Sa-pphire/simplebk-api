import Carousel from '../../models/carousel.js'
import { ObjectId } from 'mongodb';

const deleteCarousel = async function (req, res) {
    try {
        
        const { id } = req.params
        const objectId = new ObjectId(id);
        const carouselCollection = await Carousel()

        const deletedCarousel = await carouselCollection.deleteOne({ _id: objectId });
        
        return res.status(200).json({
            status: 200,
            data: deletedCarousel
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
          })
    }
}

export default deleteCarousel