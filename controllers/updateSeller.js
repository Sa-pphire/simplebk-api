import Sellers from '../models/seller.js'

const updateSeller = async function (req, res) {
  try {
    const sellerId = req.auth.user
    const { newCity, newState } = req.body

    // check if attributes are in the request body
    if (!newCity && !newState) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide newCity and/or newState in the request body'
      })
    }
    // check if one of the fields is null
    const updateFields = {}
    if (newCity !== undefined) {
      updateFields.seller_city = newCity
    }
    if (newState !== undefined) {
      updateFields.seller_state = newState
    }

    // Update seller's city and/or state
    const sellersCollection = await Sellers()
    const updatedSeller = await sellersCollection.findOneAndUpdate(
      { sellerId },
      {
        $set: updateFields
      },
      { returnDocument: 'after' }
    )

    if (!updatedSeller) {
      return res.status(404).json({
        status: 404,
        error: 'Seller not found'
      })
    }

    const response = {
      city: updatedSeller.seller_city,
      state: updatedSeller.seller_state
    }

    res.status(200).json({
      status: 200,
      data: response
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error'
    })
  }
}

export default updateSeller
