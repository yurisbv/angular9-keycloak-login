import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap, ApplicationRef } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    // {
    //   provide: KeycloakService,
    //   useValue: keycloakService,
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}


function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init(
    {
      config: environment.keycloak,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false
      },
      loadUserProfileAtStartUp: false,
      bearerExcludedUrls: []
    }
  );
}



// export class AppModule implements DoBootstrap {
//   debugger
//   ngDoBootstrap(appRef: ApplicationRef) {    
//     keycloakService
//       .init({
//           config: environment.keycloak,
//           initOptions: {
//             onLoad: 'check-sso',
//             checkLoginIframe: false
//           },
//           loadUserProfileAtStartUp: false,
//           bearerExcludedUrls: []
//         })
//       .then(() => {
//         console.log('[ngDoBootstrap] bootstrap app'); 
//         appRef.bootstrap(AppComponent);
//       })
//       .catch((error) =>
//         console.error('[ngDoBootstrap] init Keycloak failed', error)
//       );
//   }
// }

