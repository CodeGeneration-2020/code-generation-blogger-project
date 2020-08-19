import fetch from 'node-fetch';
import mbConfig from '../config/mounten-bank'

type Protocol = 'http' | 'https';


interface IImposter {
    port: number;
    protocol: Protocol;
    stubs: object;
}

export class Imposter implements IImposter {
    constructor( public port: number, public protocol: Protocol, public stubs: object) {}
}

class MountebankService {
    postImposter(body: IImposter) {
        const url = `http://127.0.0.1:${mbConfig.port}/imposters`;

        return fetch(url, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    }
}


export default MountebankService;