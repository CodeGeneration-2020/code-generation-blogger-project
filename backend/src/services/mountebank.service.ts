import fetch from 'node-fetch';
import mbConfig from '../config/mounten-bank';

type Protocol = 'http' | 'https';


export class Imposter {
    constructor( public port: string, public protocol: Protocol, public stubs: object[]) {}
}

class MountebankService {
    postImposter(body: Imposter) {
        const url = `${process.env.BACKEND_HOST}:${mbConfig.port}/imposters`;

        return fetch(url, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    }
}


export default MountebankService;