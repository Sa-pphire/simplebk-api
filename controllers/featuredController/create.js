import Featured from '../../models/featured.js'

const create = async function ( req, res ) {
    try {
        const { image, title, desc, link } = req.body
        const featuredCollection = await Featured()
        
        const newFeatured = {
            image: image,
            title: title,
            desc: desc,
            link: link,
            timestamp: new Date(),
        };
    
        const data = await featuredCollection.insertOne(newFeatured);

        return res.status(200).json({
            status: 200,
            message: "Featured created successfully",
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