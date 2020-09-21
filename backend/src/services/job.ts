import {Jobs,JobsDocumnet,ITags,ILocation} from '../models/Jobs';


export interface ICreateJobBody{
    title: String;
    budget: Number;
    tags: ITags[];
    description: String;
    phone: String;
    email: String;
    additional_contacts: String;
    attachments: String[];
    countries : ILocation[];
    cities: ILocation[];
}

export interface IJobService{
    createJob: (id: number, body: ICreateJobBody) => void;
    getJobsByCustomerId: (id: number) => Promise<JobsDocumnet[]>;
    getAllJobs: () => Promise<JobsDocumnet[]>;
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

    async getAllJobs() {
        return Jobs.find();
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