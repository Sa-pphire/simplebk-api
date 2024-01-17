import client from '../config/db.js'

const Users = async function (req, res) {
  try {
    await client.connect()
    const database = client.db()
    const users = database.collection('users')

    return users
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default Users
