// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   validRoles: ['precview'],
//   keycloak: {
//     url: 'http://localhost:4200/kc/auth',
//     realm: 'precview',
//     clientId: 'precview',
//     credentials: {
//       secret: '2dc0db61-08ac-49cb-a50f-04aef236e706'
//     }
//   }
// };
export const environment = {
  production: false,
  validRoles: ['test'],
  keycloak: {
    url: 'http://localhost:8080/kc/auth',
    realm: 'universe',
    clientId: 'docking_bay_shuttle',
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
