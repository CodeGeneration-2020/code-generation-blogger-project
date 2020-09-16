import { Router } from 'express';
import JobService from '../services/job';
import JobController from '../controllers/job';

const job = Router();

const jobControllerInstance = new JobController(new JobService());

job.get('/', (req, res, next) => {
    jobControllerInstance.getAllJobs(req, res, next);
});

job.post('/customer/:id', (req, res, next) => {
    jobControllerInstance.createJob(req, res, next);
});

job.get('/customer/:id', (req, res, next) => {
    jobControllerInstance.getJobsByCustomerId(req, res, next);
});

job.get('/:id', (req, res, next) => {
    jobControllerInstance.getJobById(req, res, next);
});

job.put('/:id/status', (req, res, next) => {
    jobControllerInstance.updateStatusJobById(req, res, next);
});

job.put('/:id', (req, res, next) => {
    jobControllerInstance.updateJobById(req, res, next);
});

export default job;

