import * as Yup from 'yup'

const today = new Date();
today.setHours(0, 0, 0, 0)

const OfferSchema = Yup.object().shape({
  name: Yup.string().required(),
  imageUrl: Yup.string().required(),
  description: Yup.string().required(),
  category: Yup.string().required(),
  place: Yup.string().required(),
  dateStart: Yup.date().required().min(today, 'Start date can not be in past'),
  dateEnd: Yup.date().min(
    Yup.ref('dateStart'),
    'The end date can not be before start date'
  ),
  price: Yup.number().required(),
  percentDiscount: Yup.number().required(),
  countInStock: Yup.number().required(),
})

const createOfferValidation = async (req, res, next) => {
  try {
    await OfferSchema.validate(req.body)
  } catch (error) {
    return res.status(422).json({ [error.path]: error.message })
  }

  next()
}

export { createOfferValidation }
