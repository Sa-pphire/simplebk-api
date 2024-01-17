import Posts from '../../models/posts.js'
import { ObjectId } from 'mongodb';

const get = async function (req, res) {
    try {
        
        const { id } = req.params
        const objectId = new ObjectId(id);
        const postCollection = await Posts()
        const post = await postCollection.findOne({ _id: objectId });
        console.log(post)
        return res.status(200).json({
            status: 200,
            data: post
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
          })
    }
}

export default get