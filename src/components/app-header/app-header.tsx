import { Component, Prop, h, State } from '@stencil/core'
import { Store } from '@stencil/redux';

@Component({
    tag: 'app-header'
})

export class AppHeader {
    @Prop({ context: 'store' }) store:Store;
    @Prop() title: string = '';

    @Prop() isLogin: boolean;

    @State() user: any;
    @State() loggedIn: any;

    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const {
                user: { user, loggedIn }
            } = state;
            
            return {
                user, loggedIn
            }
        });
    }
    
    render() {
        return [
            <ion-header>
                <ion-toolbar>
                    <ion-title>{this.title}</ion-title>
                    <ion-buttons slot="end">
                        {
                            this.renderButtons()
                        }
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        ]
    }

    renderButtons() {
        if (this.loggedIn) {
            return <ion-button>Hi, {this.user.name}</ion-button>
        } else if (this.isLogin) {
            return  <ion-button href='/home'>
                        <ion-icon slot="icon-only" name="home"></ion-icon>
                    </ion-button>
        } else {
            return  <ion-button href='/login'>
                        <ion-icon slot="icon-only" name="person"></ion-icon>
                    </ion-button>        
        }
    }
}