import csc from 'country-state-city';
import { ICountry } from 'country-state-city';

export interface ILocationService {
    getCountry: () => Promise<ICountry[]>;
    getCity: (countryId:string) => any;
}

class LocationService {
    async getCountry() {
        return csc.getAllCountries();
    }
    async getCity(countryId:string) {
        const states = csc.getStatesOfCountry(countryId);
        const cities = states.map(s=>csc.getCitiesOfState(s.id));
        return {cities:cities,countryId}
    }
}

export default LocationService;

