const mb = require('mountebank');
import mbConfig from '../../config/mounten-bank';
import MountebankService, { Imposter } from '../mountebank.service';
import InstagramMockService from '../instagram-mock.service';
import StabService from '../stub.service';

const instanceMountebankService = new MountebankService();
const instanceInstagramMockService = new InstagramMockService('FAKE_ACCESS_TOKEN', new StabService());

const initMountebank = async () => {
    await mb.create({
        port: mbConfig.port,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*']
    });

    await instanceMountebankService.postImposter(
        new Imposter(mbConfig.hello_service_port, 'http', instanceInstagramMockService.getBusinessAccountMetrics())
    )
}


export default initMountebank;