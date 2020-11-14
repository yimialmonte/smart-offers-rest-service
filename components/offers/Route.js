import { Router} from 'express'
import auth from '../authentication/auth'
import { createOffer, getOffers } from './Controller';
import { createOfferValidation } from './Validation';

const offerRoute = new Router();

offerRoute.get('/', getOffers)
offerRoute.post('/', auth, createOfferValidation, createOffer)

export { offerRoute }
