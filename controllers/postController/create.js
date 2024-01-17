import Posts from '../../models/posts.js'

const create = async function ( req, res ) {
    try {
        const { title, image, desc, category, episodes } = req.body
        const postCollection = await Posts()
        
        const newPost = {
            title: title,
            image: image,
            desc: desc,
            category: category,
            episodes: episodes,
            timestamp: new Date(),
        };
        
        const data = await postCollection.insertOne(newPost);

        return res.status(200).json({
            status: 200,
            message: "Post created successfully",
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