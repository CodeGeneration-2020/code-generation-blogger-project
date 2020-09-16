import API from './api.service';

class JobService {
  apiService: any;
  constructor(apiService) {
    this.apiService = apiService;
  }
  getTags() {
    return this.apiService.GET('tags/', {});
  }
}

const instance = new JobService(new API());

export default instance;
