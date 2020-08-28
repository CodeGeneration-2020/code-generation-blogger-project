import API from './api.service';
import { IApi } from './api.service';
import { LIMITQUERY } from '../consts/lists';

class UsersService {
  apiService: IApi;
  constructor(apiService) {
    this.apiService = apiService;
  }
  getBloggerById(bloggerId) {
    return this.apiService.GET(`user/blogger/${bloggerId}`, {});
  }
  getUsers(user) {
    return this.apiService.GET(`users/${user}?&skip=0&limit=5`, {});
  }
  getBloggersByFilters(filters, skip = 0, limit = LIMITQUERY) {
    return this.apiService.GET(
      `users/filters/bloggers?storyPrice=${
        filters.price ? filters.price.value : ''
      }&postPrice=${filters.price ? filters.price.value : ''}&country=${
        filters.country ? filters.country.value : ''
      }&city=${filters.city ? filters.city.value : ''}&tags=${
        filters.tags ? filters.tags.value : ''
      }&sex=${filters.sex ? filters.sex.value : ''}&followers=${
        filters.subscribers ? filters.subscribers.value : ''
      }&skip=${skip}&limit=${limit}`,
      {},
    );
  }
}

const instance = new UsersService(new API());

export default instance;
