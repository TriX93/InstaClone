import { Component, h, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';   

import { userLoginAction } from '../../store/user/actions'; 

import { getInitalState, configureStore } from '../../store';
import { Action } from '@stencil/redux';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  
  @Prop({ context: 'store' }) store: Store;
  @State() user: any;

  userLoginAction: Action;
  
  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore( getInitalState() ));
    
    this.store.mapStateToProps(this, (state) => {
      const {
        user: { user }
      } = state;
  
      return {
        user
      }
    });

    this.store.mapDispatchToProps( this, { userLoginAction } );
  }
  
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
      <ion-route url="/login" component="page-login" />
      </ion-router>
      <ion-router-outlet></ion-router-outlet>
      </ion-app>
      );
    }
  }
  