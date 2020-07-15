// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  validRoles: ['teste'],
  keycloak: {
    url: 'http://localhost:4200/kc/auth',
    realm: 'teste',
    clientId: 'teste',
    credentials: {
      secret: '74f372c0-6a65-45a0-bc3a-87a4fcfb47df'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
