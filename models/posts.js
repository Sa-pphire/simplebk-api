import client from '../config/db.js'

const Posts = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const posts = database.collection('posts')

    return posts
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Posts
