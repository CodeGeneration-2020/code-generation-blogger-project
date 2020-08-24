import API from './api.service';

class RegistrationService {
  apiService:any;
  constructor(apiService) {
    this.apiService = apiService;
  }
  auth(user) {
    return this.apiService.POST(`auth/${user}/login`, {blogger:{
      id: 6,
      ig_id: 234234432,
      username: 'DanaPhotki',
      name: 'Dana Bogdana',
      profile_picture_url: 'instaPicture',
      biography: 'my biography',
      website: 'insta/dana/221221',
      media_count: 123,
      follows_count: 120,
      followers_count: 100500,
      storyPrice: 8000,
      postPrice: 15200,
      location: "Berlin",
      tags: ['sport','meetings','travaling'],
      sex: 'female'
    }});
  }
}

const instance = new RegistrationService(new API());

export default instance;
