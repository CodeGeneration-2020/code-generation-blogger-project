import StabService from './stub.service';
import INSTAGRAM_MOCK from '../consts/instagram-mock';

class InstagramMockService {
    accessToken: string;
    igUserId: number;

    constructor(accessToken: string, private stabService: StabService) {
        this.accessToken = accessToken;
        this.igUserId = 17841405309211844;
    }

    getBusinessAccountMetrics() {
        return this.stabService.createStab(
            'GET',
            `/${INSTAGRAM_MOCK.GET_BUSINESS_ACCOUNT_METRICS.url}/${this.igUserId}`,
            [
                {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: INSTAGRAM_MOCK.GET_BUSINESS_ACCOUNT_METRICS.res
                }
            ]
        );
    }
}

export default InstagramMockService;