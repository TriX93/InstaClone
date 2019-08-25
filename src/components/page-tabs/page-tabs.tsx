import { Component, h } from '@stencil/core'

@Component({
    tag: 'page-tabs'
})
export class PageTabs {
    render() {
        return [
            <ion-tabs>
                <ion-tab tab="tab-home" component="tab-home">
                </ion-tab>
                <ion-tab tab="tab-map" component="tab-map">
                </ion-tab>
                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-home">
                        <ion-icon name="calendar"></ion-icon>
                        <ion-label>Home</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-map">
                        <ion-icon name="map"></ion-icon>
                        <ion-label>Map</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        ]
    }
}