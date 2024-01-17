import Posts from '../../models/posts.js'
import { ObjectId } from 'mongodb';

const deletePost = async function (req, res) {
    try {
        
        const { id } = req.params
        const objectId = new ObjectId(id);
        const postCollection = await Posts()

        const deletedPost = await postCollection.deleteOne({ _id: objectId });
        
        return res.status(200).json({
            status: 200,
            data: deletedPost
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
          })
    }
}

export default deletePost