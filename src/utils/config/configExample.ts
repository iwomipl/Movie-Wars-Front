const yourBackendDomain = 'http://localhost:3001'; // 'http://localhost:3001' for localhost on port 3001
const yourBackendDomainUrlPrefix = ''; // empty string '' if mo prefix "/new-api" if your domain is localhost 'http://yourDomain.com/new-api'
export const config = {
    listOfMoviesUpdatePath: `${yourBackendDomain}${yourBackendDomainUrlPrefix}`,
}