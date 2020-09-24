import { Router } from 'express';
import LocationService from '../services/location';
import LocationController from '../controllers/location';

const location = Router();

const locationControllerInstance = new LocationController(new LocationService());

location.get('/country', (req, res, next) => {
    locationControllerInstance.getCountry(req, res, next);
});

location.get('/city/:countryId', (req, res, next) => {
    locationControllerInstance.getCity(req, res, next);
});

export default location;