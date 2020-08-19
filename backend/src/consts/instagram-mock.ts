

const fakeFacebookApiUrl = 'fake-graph.facebook.com/v3.2';

const INSTAGRAM_MOCK = {
    GET_BUSINESS_ACCOUNT_METRICS: {
        url: fakeFacebookApiUrl,
        res: {
                'business_discovery': {
                    'followers_count': 267793,
                        'media_count': 1205,
                        'media': {
                        'data': [
                            {
                                'comments_count': 50,
                                'like_count': 5841,
                                'id': '17858843269216389'
                            },
                            {
                                'comments_count': 11,
                                'like_count': 2998,
                                'id': '17894036119131554'
                            },
                            {
                                'comments_count': 28,
                                'like_count': 3644,
                                'id': '17894449363137701'
                            },
                            {
                                'comments_count': 43,
                                'like_count': 4943,
                                'id': '17844278716241265'
                            },
                            {
                                'comments_count': 60,
                                'like_count': 9347,
                                'id': '17899363132086521'
                            },
                            {
                                'comments_count': 63,
                                'like_count': 6913,
                                'id': '17893114378137541'
                            },
                            {
                                'comments_count': 16,
                                'like_count': 2791,
                                'id': '17886057709171561'
                            },
                            {
                                'comments_count': 15,
                                'like_count': 3895,
                                'id': '17856337633208377'
                            },
                        ],
                    },
                    'id': '17841401441775531'
                },
                'id': '17841405976406927'
            },
    }
};
export default INSTAGRAM_MOCK;