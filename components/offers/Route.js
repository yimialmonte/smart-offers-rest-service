import { Router} from 'express'
import { getOffers } from './Controller';

const offerRoute = new Router();

offerRoute.get('/', getOffers);

export { offerRoute }
