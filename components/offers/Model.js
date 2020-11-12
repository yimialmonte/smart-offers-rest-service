import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const offerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  percentDiscount: {
    type: Number,
    required: true
  },
  countInStock: {
    type: Number,
    required: true
  },
  reviews: [reviewSchema],
})


const Offer = new mongoose.model('User', offerSchema)

export default Offer
