import { Component, h, Prop, State } from '@stencil/core'
import { Store, Action } from '@stencil/redux';

import { userErrorAction, userLoginAction } from '../../store/user/actions'

@Component({
    tag: 'page-login'
})
export class PageLogin {
    @Prop( { context: 'store' } ) store: Store
    
    @State() user: any;
    @State() loggedIn: any;
    @State() error: any;

    userLoginAction: Action;
    userErrorAction: Action;

    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { user: {
                user, loggedIn, error
            }} = state;

            return {
                user, loggedIn, error
            }
        });

        this.store.mapDispatchToProps(this, { 
            userLoginAction, userErrorAction
         });
    }

    simulateLogin() {
        this.userLoginAction( {
            name: 'antani'
        })
    }

    simulateError() {
        this.userErrorAction( 'Error: this is just a test!' )
    }

    showErrors() {
        return <pre style={ {color: 'red'} }>{ JSON.stringify(this.error) }</pre>;
    }

    debugUser() {
        return <pre style={ {color: 'green'} }>{ JSON.stringify(this.user) }</pre>;
    }

    render() {
        return [
            <app-header isLogin={true} title="Login"></app-header>,
            <ion-content>
                <h1>C'mon!</h1>
                <ion-button onClick={() => this.simulateError()}>Simulate error</ion-button>
                <ion-button onClick={() => this.simulateLogin()}>Simulate Login</ion-button>
                {this.showErrors()}
                {this.debugUser()}
            </ion-content>
        ]
    }
}