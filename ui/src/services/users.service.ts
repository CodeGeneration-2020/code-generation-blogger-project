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
      `users/filters/bloggers?storyPrice=${addQuery(
        filters.price,
      )}&postPrice=${addQuery(filters.price)}&country=${addQuery(
        filters.country,
      )}&city=${addQuery(filters.city)}&tags=${addQuery(
        filters.tags,
      )}&sex=${addQuery(filters.sex)}&followers=${addQuery(
        filters.subscribers,
      )}&skip=${skip}&limit=${limit}`,
      {},
    );
  }
  createComment(userType, senderId, receiverId, comment) {
    return this.apiService.POST(`user/${userType}/${receiverId}/comment`, {
      senderId,
      comment,
    });
  }
  getComments(userType, userId, skip, limit) {
    return this.apiService.GET(
      `user/${userType}/${userId}/comments?skip=${skip}&limit=${limit}`,
      {},
    );
  }
}

const instance = new UsersService(new API());

export default instance;
