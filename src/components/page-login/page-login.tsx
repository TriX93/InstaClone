import { Component, h, Prop, State } from '@stencil/core'
import { Store, Action } from '@stencil/redux';

import { Firebase } from '../../services/firebase';

import { userErrorAction, userLoginAction } from '../../store/user/actions'

@Component({
    tag: 'page-login',
    styleUrl: 'page-login.scss'
})
export class PageLogin {
    @Prop( { context: 'store' } ) store: Store
    
    @State() user: any;
    @State() loggedIn: any;
    @State() error: any;

    @State() email: string;
    @State() password: string;

    firebaseRef: any;

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

        this.firebaseRef = Firebase.getInstance();
    }

    simulateLogin() {
        this.userLoginAction( {
            name: 'antani',
            email: ''+this.email
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
                <ion-grid class="ion-justify-content-center">
                    <ion-col class="ion-col-lg-5 ion-col-md-6 ion-col-sm-12">
                        <div class="ion-padding">
                            <ion-item>
                                <ion-input name="email" type="email" placeholder="Email" value={this.email} onInput={ e => this.emailOnChange(e) }></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input name="password" type="password" placeholder="Password" value={this.password} onInput={ e => this.passwordOnChange(e) }></ion-input>
                            </ion-item>
                            {this.showErrors()}
                        </div>
                        <div class="ion-padding">
                            <ion-button onClick={() => this.simulateLogin()}>Simulate Login</ion-button>
                        </div>
                    </ion-col>
                </ion-grid>
                {this.debugUser()}
            </ion-content>
        ]
    }

    emailOnChange(e) {
        this.email = e.target.value;
    };

    passwordOnChange(e) {
        this.password = e.target.value;
    };

}