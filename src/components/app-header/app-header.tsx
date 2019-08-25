import { Component, Prop, h } from '@stencil/core'

@Component({
    tag: 'app-header'
})

export class AppHeader {
    @Prop() title: string = '';

    render() {
        return [
            <ion-header>
                <ion-toolbar>
                    <ion-title>{this.title}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button>
                            <ion-icon slot="icon-only" name="person"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        ]
    }
}