import API from './api.service';
import { IApi } from './api.service';
import { LIMITQUERY } from '../consts/lists';
import { addQuery } from '../app/helpers/addQuery';

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
        addQuery(filters.price)
      }&postPrice=${addQuery(filters.price)}&country=${
        addQuery(filters.country)
      }&city=${filters.city ? filters.city.value : ''}&tags=${
        addQuery(filters.tags)
      }&sex=${filters.sex ? filters.sex.value : ''}&followers=${
        addQuery(filters.subscribers)
      }&skip=${skip}&limit=${limit}`,
      {},
    );
  }
}

const instance = new UsersService(new API());

export default instance;
