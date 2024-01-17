import Posts from '../../models/posts.js'

const getAll = async function (req, res) {
  try {
    const sortBy = req.query.sortBy || 'title'

    const postCollection = await Posts()
    const posts = await postCollection
    .find()
    .sort({ [sortBy]: 1 })
    .toArray()

    const response = {
      data: posts.map((post) => ({
        id: post._id,
        title: post.title,
        image: post.image,
        category: post.category,
        desc: post.desc,
        episodes: post.episodes
      }))
    }

    return res.status(200).json({
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
