import csc from 'country-state-city';
import { ICountry, ICity as IBaseCity } from 'country-state-city';

interface ICity {
    cities: IBaseCity[][],
    countryId: String
}

export interface ILocationService {
    getCountry: () => Promise<ICountry[]>;
    getCity: (countryId:string) => Promise<ICity>;
}

class LocationService {
    async getCountry() {
        return csc.getAllCountries();
    }
    async getCity(countryId:string) {
        const states = csc.getStatesOfCountry(countryId);
        const cities = states.map(s=>csc.getCitiesOfState(s.id));
        return {cities,countryId}
    }
}

export default LocationService;

