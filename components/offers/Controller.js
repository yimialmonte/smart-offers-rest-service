import Offer from './Model'
import offers from '../../data/offers'

const getOffers = async (req, res) => {
  try {
    //Simulate time respond
    setTimeout(() => {
      res.status(201).send(offers)
    }, 1000)
  } catch (error) {
    res.status(500).send(error)
  }
}

const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body)
    await offer.save()
    res.status(201).send({ offer })
  } catch (error) {
    res.status(500).send(error)
  }
}

export { getOffers, createOffer }
