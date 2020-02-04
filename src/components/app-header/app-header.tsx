import { Component, Prop, h, State } from '@stencil/core'
import { Store } from '@stencil/redux';

@Component({
    tag: 'app-header'
})

export class AppHeader {
    @Prop({ context: 'store' }) store:Store;
    @Prop() title: string = '';

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
                        <ion-button>
                        {this.loggedIn && !!this.user.name ? 
                            <span>{this.user.name}</span> : 
                            <ion-icon slot="icon-only" name="person"></ion-icon>  
                        }
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        ]
    }
}