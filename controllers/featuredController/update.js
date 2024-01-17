import Featured from '../../models/featured.js'
import { ObjectId } from 'mongodb';

const update = async function (req, res) {
    try {
        
        const { id } = req.params
        const objectId = new ObjectId(id);
        const featuredCollection = await Featured()
        const updatedFeatured = await featuredCollection.updateOne(
            { _id: objectId },
            { $set: req.body }
          );
        
        return res.status(200).json({
            status: 200,
            data: updatedFeatured
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error'
          })
    }
}

export default update