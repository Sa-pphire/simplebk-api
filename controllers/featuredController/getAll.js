import Featured from '../../models/featured.js'

const getAll = async function (req, res) {
  try {
    const sortBy = req.query.sortBy || 'title'

    const featuredCollection = await Featured()
    const featureds = await featuredCollection
    .find()
    .sort({ [sortBy]: 1 })
    .toArray()

    const response = {
      data: featureds.map((featured) => ({
        id: featured._id,
        title: featured.title,
        image: featured.image,
        desc: featured.desc,
        link: featured.link
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
