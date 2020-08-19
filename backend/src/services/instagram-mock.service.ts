import StabService from "./stub.service";
import INSTAGRAM_MOCK from "../consts/instagram-mock";

class InstagramMockService {
    accessToken: string;
    ig_user_id: number;

    constructor(accessToken: string, private stabService: StabService) {
        this.accessToken = accessToken;
        this.ig_user_id = 17841405309211844;
    }

    getBusinessAccountMetrics() {
        return this.stabService.createStab(
            "GET",
            `${INSTAGRAM_MOCK.GET_BUSINESS_ACCOUNT_METRICS.url}/${this.ig_user_id}`,
            [
                {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: INSTAGRAM_MOCK.GET_BUSINESS_ACCOUNT_METRICS.res
                }
            ]
        )
    }
}

export default InstagramMockService;