import {Jobs,JobsDocumnet,ITags,ILocation} from '../models/Jobs';


export interface ICreateJobBody{
    title: String;
    budget: Number;
    tags: ITags[];
    description: String;
    contact:{
        phone: String;
        email: String;
    };
    additional_contacts: String;
    attachments: String[];
    location:{
        countries : ILocation[];
        cities: ILocation[];
    };
}

export interface IJobService{
    createJob: (id: number, body: ICreateJobBody) => void;
    getJobsByCustomerId: (id: number) => Promise<JobsDocumnet[]>;
    getAllJobs: () => Promise<JobsDocumnet[]>;
    getJobById: (id:string) => Promise<JobsDocumnet>;
    updateStatusJobById: (id:string,status:boolean) => Promise<JobsDocumnet>;
    updateJobById: (id:string,body:JobsDocumnet) =>  Promise<JobsDocumnet>;
}

class JobService implements IJobService  {
  
    async createJob(id:number,body:ICreateJobBody){
        const jobs = new Jobs({
            customerId:id,
            status: true,
            title: body.title,
            budget: body.budget,
            tags: body.tags,
            description: body.description,
            contact:{
                phone: body.contact.phone,
                email: body.contact.email,
            },
            additional_contacts: body.additional_contacts,
            attachments: body.attachments,
            location: {
                countries: body.location.countries,
                cities: body.location.cities,
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

    async updateJobById(id:string,body:JobsDocumnet){
        return Jobs.findByIdAndUpdate(id,{...body},{new:true});
    }
}

export default JobService;