
type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Response {
    statusCode: number
    headers: object,
    body: object
}

class StabService {
    createStab(method: Methods, path: string, responses: Response[] ) {
        return {
            predicates: [ {
                equals: {
                    method: method,
                    "path": path
                }
            }],
            responses: responses.map(({statusCode, headers, body}) => {
                return {
                    is: {
                        statusCode,
                        headers,
                        body: JSON.stringify(body)
                    }
                }
            })

        }
    }
}

export default StabService;