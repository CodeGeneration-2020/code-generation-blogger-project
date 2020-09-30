import { Request, Response, NextFunction } from 'express';
import { ILocationService } from './../services/location';

class LocationController {
   
    constructor(public locationService: ILocationService ) {
       
    }
    async getCountry(req: Request, res: Response, next: NextFunction){
        try{
            const country = await this.locationService.getCountry();
            res.json(country);
        } catch (e) {
            return next(e);
        }
    }
    async getCity(req: Request, res: Response, next: NextFunction){
        try{
            const city = await this.locationService.getCity(req.params.countryId);
            res.json(city);
        } catch (e) {
            return next(e);
        }
    }
}

export default LocationController;