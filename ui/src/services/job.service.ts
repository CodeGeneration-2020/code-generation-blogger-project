import API from './api.service';
import { addQuery } from '../app/helpers/addQuery';
import { PAGINATION } from '../consts/lists';

class JobService {
  apiService: any;
  constructor(apiService) {
    this.apiService = apiService;
  }
  createJob(job, userId) {
    return this.apiService.POST(`job/customer/${userId}`, {
      ...job,
    });
  }
  editJob(job, jobId) {
    return this.apiService.PUT(`job/${jobId}`, {
      ...job,
    });
  }
  getJobsByFilters(filters, skip = 0, limit = PAGINATION.limit) {
    return this.apiService.GET(
      `job/filters?budget=${addQuery(filters.budget)}&countries=${addQuery(
        filters.country,
      )}&cities=${addQuery(filters.city)}&tags=${addQuery(
        filters.tags,
      )}&skip=${skip}&limit=${limit}`,
      {},
    );
  }
  getJobById(jobId) {
    return this.apiService.GET(`job/${jobId}`, {});
  }
}

const instance = new JobService(new API());

export default instance;
