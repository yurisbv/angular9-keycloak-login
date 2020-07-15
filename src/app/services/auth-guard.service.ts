import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

const helper = new JwtHelperService();


@Injectable()
export class AuthGuardService extends KeycloakAuthGuard {


  constructor(
    protected router: Router,
    protected keycloakAngular: KeycloakService
  ) {
    super(router, keycloakAngular);


    this.keycloakAngular.getToken().then(
      res => {
        if (res) {
          // decode token
          const { email, name } = helper.decodeToken(res);
          //save valid user info
          //corporation_id is a atribut created in user under keycloak
          const user = {
            email,
            name
          }
          //save in browser Local Storage
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
      },
      error => console.error(error)
    );

  }

  clearRoles(roles: string[]) {
    return roles.filter(val => {
      // remove other roles that don't matter
      if (environment.validRoles.indexOf(val.toLowerCase()) >= 0)
        return val;
    });
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve) => {
      let granted: boolean;
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }
      this.autoRefreshToken(299);
      const requiredRoles = route.data.roles;
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(false);
        }
        for (const requiredRole of requiredRoles) {
          granted = this.keycloakAngular.isUserInRole(requiredRole);
          if (granted) {
            resolve(granted);
          }
        }
      }
      resolve(granted);
    });
  }

  autoRefreshToken(time: number){
    setInterval(() => {
        this.keycloakAngular.updateToken()
        console.log('token refreshed')
      }, time*1000
    )
  }
}
