import mountebank from 'mountebank';
import mbConfig from '../../config/mounten-bank';
import MountebankService, { Imposter } from '../mountebank.service';
import InstagramMockService from '../instagram-mock.service';
import StabService from '../stub.service';

const instanceMountebankService = new MountebankService();
const instanceInstagramMockService = new InstagramMockService('FAKE_ACCESS_TOKEN', new StabService());

const initMountebank = async () => {
    await mountebank.create({
        port: mbConfig.port,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*']
    });

    await instanceMountebankService.postImposter(
        new Imposter(mbConfig.instagramServicePort, 'http', [instanceInstagramMockService.getBusinessAccountMetrics()])
    );
};


export default initMountebank;