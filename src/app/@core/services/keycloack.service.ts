import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import { environment } from '../../../environments/environment';

@Injectable()
export class KeycloakService {

  static auth: any = {}
  constructor() { }

  static init(): Promise<any> {
    /**
     * init KeycloakService with client-id
     * @type {Keycloak.KeycloakInstance}
     */
    const keycloakAuth: Keycloak.KeycloakInstance = Keycloak({
      url: environment.keycloak.url,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId
    });

    KeycloakService.auth.loggedIn = false;
    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required', checkLoginIframe: false })
        .success(() => {
          KeycloakService.auth.loggedIn = true;
          KeycloakService.auth.authz = keycloakAuth;
          sessionStorage.setItem("nom", KeycloakService.auth.authz.tokenParsed.name);
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  login(): void {
    KeycloakService.auth.authz.login().success(
      () => {
        KeycloakService.auth.loggedIn = true;
      }
    );
  }  
  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not logged in');
      }
    });
  }
  isLoggedIn(): boolean {
    return KeycloakService.auth.authz.authenticated;
  }
  getFullName(): string {
    return KeycloakService.auth.authz.tokenParsed.name;
  }
  getEmail(): string {
    return KeycloakService.auth.authz.tokenParsed.email;
  }
  getKeycloakAuth() {
    return KeycloakService.auth.authz;
  }
  getRoles(): string[] {
    return KeycloakService.auth.authz.tokenParsed.realm_access.roles;
  }
  logout(): void {
    KeycloakService.auth.authz.logout({ redirectUri: document.baseURI }).success(() => {
      KeycloakService.auth.loggedIn = false;
      KeycloakService.auth.authz = null;
    });
  }
}

//Test

