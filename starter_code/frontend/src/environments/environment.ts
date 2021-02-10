/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

/*
#Some References {
  https://github.com/manishbisht/Coffee-Shop-Full-Stack
}
*/

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'ihana.us', // the auth0 domain prefix //ihana.us.auth0.com
    audience: 'FSND', // the audience set for the auth0 app
    clientId: 'dkg1wMNOxO16pY04f6ItFDUqLGZkZcZE', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100/tabs/user-page', // the base url of the running ionic application. 
  }
};
