import Carousel from '../../models/carousel.js'

const getAll = async function (req, res) {
  try {
    const sortBy = req.query.sortBy || 'title'

    const carouselCollection = await Carousel()
    const carousel = await carouselCollection
    .find()
    .sort({ [sortBy]: 1 })
    .toArray()

    const response = {
      data: carousel.map((carousel) => ({
        id: carousel._id,
        image: carousel.image,
        link: carousel.link,
      }))
    }

    return res.status(200).json({
        status: 200,
        response
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default getAll
