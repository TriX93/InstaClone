import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/home" />
          <ion-route component="page-tabs">
            <ion-route url="/home" component="tab-home"></ion-route>
            <ion-route url="/map" component="tab-map"></ion-route>
          </ion-route>
          <ion-route url="/profile/:name" component="page-profile" />
        </ion-router>
        <ion-router-outlet></ion-router-outlet>
      </ion-app>
    );
  }
}
