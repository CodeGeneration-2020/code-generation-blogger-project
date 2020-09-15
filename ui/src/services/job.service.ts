import API from './api.service';

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
  editJob(job) {
    return this.apiService.PUT(`job/${job._id}`, {
      ...job,
    });
  }
  getAllJobs() {
    return this.apiService.GET('job/', {});
  }
  getJobById(jobId) {
    return this.apiService.GET(`job/${jobId}`, {});
  }
}

const instance = new JobService(new API());

export default instance;
