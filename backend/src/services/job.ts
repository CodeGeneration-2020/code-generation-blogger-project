import {Jobs,JobsDocumnet} from '../models/Jobs';


export interface ICreateJobBody{
    title: String;
    budget: Number;
    tags: String[];
    description: String;
    phone: String;
    email: String;
    additional_contacts: String;
    attachments: String[];
    country : String;
    city: String;
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
        const jobs = new Jobs({
            customerId:id,
            status: true,
            title:body.title,
            budget:body.budget,
            tags: body.tags,
            description: body.description,
            contact:{
                phone: body.phone,
                email: body.email,
            },
            additional_contacts: body.additional_contacts,
            attachments: body.attachments,
            location: {
                country: body.country,
                city: body.city,
            }
        });
        await jobs.save();
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
        const phone = body.phone ? {'contact.phone':body.phone} : '';
        const email = body.email ? {'contact.email':body.email} : '';
        const country = body.country ? {'location.country': body.country} : '';
        const city = body.city ? {'location.city': body.city} : '';
        return Jobs.findByIdAndUpdate(id,{...body,...phone,...email, ...country, ...city},{new:true});
    }
}

module.exports = JobService;

