import { Router} from 'express'
import auth from '../authentication/auth'
import { createOffer, getOffers } from './Controller';

const offerRoute = new Router();

offerRoute.get('/', getOffers)
offerRoute.post('/', auth, createOffer)

export { offerRoute }
