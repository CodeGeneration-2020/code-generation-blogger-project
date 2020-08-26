import API from './api.service';
import { IApi } from './api.service';

class UsersService {
  apiService: IApi;
  constructor(apiService) {
    this.apiService = apiService;
  }
  getBloggerById(bloggerId){
    return this.apiService.GET(`user/blogger/${bloggerId}`, {});
  }
  getUsers(user) {
    return this.apiService.GET(`users/${user}?&skip=2&limit=2`, {});
  }
  getBloggersByFilters() {
    return this.apiService.GET(
      `users/filters/bloggers?storyPrice=50,20000&postPrice=50,20000&country=Ukraine&city=Kharkiv&tags=sport,food,it&sex=male&skip=0&limit=2`,
      {},
    );
  }
}

const instance = new UsersService(new API());

export default instance;
