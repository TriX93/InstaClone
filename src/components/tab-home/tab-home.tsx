import { Component, h } from '@stencil/core'

@Component({
    tag: 'tab-home'
})
export class TabHome {
    render() {
        return [
            <app-header title="Home"></app-header>,
            <ion-content>
                <h1>It Works!</h1>
            </ion-content>
        ]
    }
}