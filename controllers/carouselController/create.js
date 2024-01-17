import Carousel from '../../models/carousel.js'

const create = async function ( req, res ) {
    try {
        const { image, link } = req.body
        const carouselCollection = await Carousel()
        
        const newCarousel = {
            image: image,
            link: link,
        };
    
        const data = await carouselCollection.insertOne(newCarousel);

        return res.status(200).json({
            status: 200,
            message: "Carousel created successfully",
            data: data
        })
        
    } catch (error) {
        return res.status(500).json({
                status: 500,
                error: 'Internal Server Error'
            })
    }
}

export default create;