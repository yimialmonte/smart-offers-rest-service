import offers from '../../data/offers';

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

export { getOffers }
