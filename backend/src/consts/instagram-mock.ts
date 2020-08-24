

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
    },
    GET_INSIGHTS:{
        url: fakeFacebookApiUrl,
        res:{
            'insights': [
              {
                'name': 'impressions',
                'period': 'day',
                'values': [
                  {
                    'value': 4,
                    'end_time': '2017-05-04T07:00:00+0000'
                  },
                  {
                    'value': 66,
                    'end_time': '2017-05-05T07:00:00+0000'
                  }
                ],
                'title': 'Impressions',
                'description': 'Total number of times this profile has been seen',
                'id': '17841400008460056/insights/impressions/day'
              },
              {
                'name': 'reach',
                'period': 'day',
                'values': [
                  {
                    'value': 3,
                    'end_time': '2017-05-04T07:00:00+0000'
                  },
                  {
                    'value': 36,
                    'end_time': '2017-05-05T07:00:00+0000'
                  }
                ],
                'title': 'Reach',
                'description': 'Total number of unique accounts that have seen this profile',
                'id': '17841400008460056/insights/reach/day'
              },
              {
                'name': 'profile_views',
                'period': 'day',
                'values': [
                  {
                    'value': 0,
                    'end_time': '2017-05-04T07:00:00+0000'
                  },
                  {
                    'value': 2,
                    'end_time': '2017-05-05T07:00:00+0000'
                  }
                ],
                'title': 'Profile Views',
                'description': 'Total number of unique accounts that have viewed this profile within the specified period',
                'id': '17841400008460056/insights/profile_views/day'
              }
            ]
          }
    }
};
export default INSTAGRAM_MOCK;