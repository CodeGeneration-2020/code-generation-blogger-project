import API from './api.service';

class JobService {
  apiService: any;
  constructor(apiService) {
    this.apiService = apiService;
  }
  getTags() {
    return this.apiService.GET('tags/', {});
  }
  getCity(countryId) {
    return this.apiService.GET(`location/city/${countryId}`, {});
  }
  getCountry() {
    return this.apiService.GET('location/country/', {});
  }
}

const instance = new JobService(new API());

export default instance;
