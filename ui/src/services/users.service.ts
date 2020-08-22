import API from './api.service';
import { IApi } from './api.service';

class UsersService {
  apiService: IApi;
  constructor(apiService) {
    this.apiService = apiService;
  }
  getUsers(user) {
    return this.apiService.GET(`users/${user}?&skip=2&limit=2`, {});
  }
  getBloggersByFilters(){
    return this.apiService.GET(`users/filters/bloggers?storyPrice=50,20000&postPrice=50,20000&location=Kiev&tags=sport,food,it&sex=male&skip=2&limit=2`,{});
  }
}

const instance = new UsersService(new API());

export default instance;
