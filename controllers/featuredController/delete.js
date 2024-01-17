import Featured from '../../models/featured.js'
import { ObjectId } from 'mongodb';

const deleteFeatured = async function (req, res) {
    try {
        
        const { id } = req.params
        const objectId = new ObjectId(id);
        const featuredCollection = await Featured()

        const deletedFeatured = await featuredCollection.deleteOne({ _id: objectId });
        
        return res.status(200).json({
            status: 200,
            data: deletedFeatured
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
          })
    }
}

export default deleteFeatured