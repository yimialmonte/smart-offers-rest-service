import offers from '../../data/offers';

const getOffers = async (req, res) => {
  try {
    res.status(201).send(offers)
  } catch (error) {
    res.status(500).send(error)
  }
}

export { getOffers }
