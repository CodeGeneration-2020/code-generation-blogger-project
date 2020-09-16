import {IJobService} from '../services/job';
import { Request, Response, NextFunction } from 'express';

  
class Job {

    constructor(public userService: IJobService ) {
       
    }

    async createJob(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await this.userService.createJob(+req.params.id,req.body);
            res.json(response);
        } catch (e) {
            return next(e);
        }
    }

    async getJobsByCustomerId(req: Request, res: Response, next: NextFunction) {
        try {
            const jobs = await this.userService.getJobsByCustomerId(+req.params.id);
            res.json(jobs);
        } catch (e) {
            return next(e);
        }
    }

    async getAllJobs(req: Request, res: Response, next: NextFunction) {
        try {
            const jobs = await this.userService.getAllJobs();
            res.json(jobs);
        } catch (e) {
            return next(e);
        }
    }

    async getJobById(req: Request, res: Response, next: NextFunction) {
        try {
            const job = await this.userService.getJobById(req.params.id);
            res.json(job);
        } catch (e) {
            return next(e);
        }
    }
    
    async updateStatusJobById(req: Request, res: Response, next: NextFunction) {
        try {
            const job = await this.userService.updateStatusJobById(req.params.id,req.body.status);
            res.json(job);
        } catch (e) {
            return next(e);
        }
    }

    async updateJobById(req: Request, res: Response, next: NextFunction) {
        try {
            const job = await this.userService.updateJobById(req.params.id,req.body);
            res.json(job);
        } catch (e) {
            return next(e);
        }
    }
}

export default Job;

