import StabService from './stub.service';
import INSTAGRAM_MOCK from '../consts/instagram-mock';


interface IinstagramService {
    accessToken: string;
    igUserId: number;
    getBusinessAccountMetrics: any;
    getInsights: any;
}


class InstagramMockService implements IinstagramService {
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
    getInsights(){
        return this.stabService.createStab(
            'GET',
            `/${INSTAGRAM_MOCK.GET_BUSINESS_ACCOUNT_METRICS.url}/${this.igUserId}/insignhts/metric=impressions,reach,profile_views&period=day&access_token=FAKE_ACCESS_TOKEN`,
            [
                {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: INSTAGRAM_MOCK.GET_INSIGHTS.res
                }
            ]
        );
    }
}

export default InstagramMockService;