import fetch from 'node-fetch';

interface IqueryInsignhts {
    ig_user_id: string;
    accessToken: string;
    metric: string[];
    period: string;
    since?: number;
    until?: number;
}

export interface IinstagramService{
    getBusinessDiscovery: (ig_user_id: string) => Record<string, any>;
    getInsights: (query: IqueryInsignhts) => Record<string, any>;
}

class InstagramService {
    async getBusinessDiscovery(ig_user_id: string){
        const businessDiscovery = (await fetch(`http://localhost:5001/fake-graph.facebook.com/v3.2/${ig_user_id}`)).json();
        return businessDiscovery;
    }
    async getInsights(query: IqueryInsignhts){
        const insights = (await fetch(`http://localhost:5001/fake-graph.facebook.com/v3.2/${query.ig_user_id}/insignhts/metric=${query.metric}&period=${query.period}${query.since ? `&until=${query.since}` : ''}${query.until ? `&until=${query.until}` : ''}&access_token=${query.accessToken}`)).json();
        return insights;
    }
    
} 

export default InstagramService; 