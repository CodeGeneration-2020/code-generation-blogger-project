import {Country,CountryDocument} from '../models/Country';
import {City,CityDocument} from '../models/City';

export interface ILocationService {
    getCountry: () => Promise<CountryDocument[]>;
    getCity: () => Promise<CityDocument[]>;
    addCountry: (name:string) => Promise<string>;
    addCity: (name:string) => Promise<string>;
}

class LocationService {
    async getCountry() {
        return Country.find();
    }
    async getCity() {
        return City.find();
    }
    async addCountry(name:string) {
        const country = new Country({
            name
        });
        await country.save();
        return "country created success";
    }
    async addCity(name:string) {
        const city = new City({
            name
        });
        await city.save();
        return "city created success";
    }
}

export default LocationService;

