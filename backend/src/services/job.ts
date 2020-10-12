import {Jobs,JobsDocumnet,IOption} from '../models/Jobs';


export interface ICreateJobBody{
    title: String;
    budget: Number;
    tags: IOption[];
    description: String;
    phone: String;
    email: String;
    additional_contacts: String;
    attachments: String[];
    countries : IOption[];
    cities: IOption[];
}

export interface IFilters {
    budget: string;
    tags: string;
    cities: string;
    countries:  string;
    skip: number;
    limit: number;
}

export interface IJobService{
    createJob: (id: number, body: ICreateJobBody) => void;
    getJobsByCustomerId: (id: number) => Promise<JobsDocumnet[]>;
    getJobs: (filters: IFilters) => Promise<JobsDocumnet[]>;
    getJobById: (id:string) => Promise<JobsDocumnet>;
    updateStatusJobById: (id:string,status:boolean) => Promise<JobsDocumnet>;
    updateJobById: (id:string,body:ICreateJobBody) =>  Promise<JobsDocumnet>;
}

class JobService implements IJobService  {
  
    async createJob(id:number,body:ICreateJobBody){
        const job = new Jobs({
            customerId:id,
            status: true,
            title: body.title,
            budget: body.budget,
            tags: body.tags,
            description: body.description,
            contact:{
                phone: body.phone,
                email: body.email,
            },
            additional_contacts: body.additional_contacts,
            attachments: body.attachments,
            location: {
                countries: body.countries,
                cities: body.cities,
            }
        });
        await job.save();
    }
    
    async getJobsByCustomerId(id: number) {
        return Jobs.find({customerId:id});
    }

    async getJobs(filters:IFilters) {
        const budget = filters.budget && JSON.parse(filters.budget);
        const tags = filters.tags.length>2 && JSON.parse(filters.tags);
        const countries = filters.countries.length>2  && JSON.parse(filters.countries);
        const cities = filters.cities.length>2 && JSON.parse(filters.cities);
        return await Jobs.find({
            budget: budget ? {$gte:+budget[0], $lte:+budget[1]} : {$ne:+budget},
            'tags.value': tags ? { $in: tags } : {$ne:+tags},
            'location.countries.value': countries ? {$in:countries} : {$ne:countries},
            'location.cities.value': cities ? {$in:cities} : {$ne:cities},
        }).skip(+filters.skip).limit(+filters.limit);
    }

    async getJobById(id:string){
        return Jobs.findById(id).populate('customerId');
    }

    async updateStatusJobById(id:string,status:boolean){
        return Jobs.findByIdAndUpdate(id,{status},{new:true});
    }

    async updateJobById(id:string,body:ICreateJobBody){
        const job = {
            title: body.title,
            budget: body.budget,
            tags: body.tags,
            description: body.description,
            contact:{
                phone: body.phone,
                email: body.email,
            },
            additional_contacts: body.additional_contacts,
            attachments: body.attachments,
            location: {
                countries: body.countries,
                cities: body.cities,
            }
        };
        return Jobs.findByIdAndUpdate(id,job,{new:true});
    }
}

export default JobService;