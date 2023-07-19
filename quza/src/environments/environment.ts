// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const zoho_client_id = "1000.Q4YMZLD8CGOGAH2K6X0W0CZ8XC219G";
export const environment = {
  production: false,
    client_secret: "6b845bb7d125ca62b1feb124842dc1bac494af7b2a",
  base_url: {
    authorization_request:"https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.Q4YMZLD8CGOGAH2K6X0W0CZ8XC219G&scope=ZohoCreator.form.CREATE&redirect_uri=https://quza.co.ke/callback&access_type=offline",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
