import { Component, h } from '@stencil/core'

@Component({
    tag: 'tab-map'
})
export class TabMap {
    render() {
        return [
            <app-header title="Map"></app-header>,
            <ion-content>
                <google-map></google-map>
            </ion-content>
        ]
    }
}