import API from './api.service';

class RegistrationService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  registration(user) {
    return this.apiService.POST(`registration/${user}`, {});
  }
  test() {
    return this.apiService.GET(`registration/auth/instagram`, {});
  }
}

const instance = new RegistrationService(new API());

export default instance;
