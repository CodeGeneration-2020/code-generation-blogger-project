import API from './api.service';
import { IApi } from './api.service';
import { PAGINATION } from '../consts/lists';
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
  getBloggersByFilters(filters, skip = 0, limit = PAGINATION.limit) {
    return this.apiService.GET(
      `users/filters/bloggers?storyPrice=${addQuery(
        filters.priceStory,
      )}&postPrice=${addQuery(filters.pricePost)}&pricePS=${addQuery(
        filters.pricePS,
      )}&country=${addQuery(filters.country)}&city=${addQuery(
        filters.city,
      )}&tags=${addQuery(filters.tags)}&sex=${addQuery(
        filters.gender,
      )}&followers=${addQuery(filters.subscribers)}&er=${addQuery(
        filters.er,
      )}&skip=${skip}&limit=${limit}`,
      {},
    );
  }
  createCommentForCustomer(senderId, receiverId, comment) {
    return this.apiService.POST(`user/customer/${receiverId}/comment`, {
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
