import { Component, h } from '@stencil/core'
import { Plugins } from '@capacitor/core';
import environment from '../../global/env'

declare var google;

const { Geolocation } = Plugins;

@Component({
    tag: 'google-map',
    styleUrl: 'google-map.css'
})
export class GoogleMap {
    public map: any = null;
    public mapsLoaded: Boolean = null;
    apiKey: string = environment.google.apiKey;

    render () {
        return (
            <div id="google-map-container"></div>
        )
    }

    componentDidLoad() {
        this.init()
            .then(
                () => console.log('Google Maps Ready'),
                error => console.log(error)
            )
    }

    init() {
        return new Promise( (resolve, reject) => {
            this.loadSDK()
                .then(
                    () => {
                        this.initMap()
                            .then(
                                () => {
                                    resolve(true);
                                },
                                error => reject(error)
                            )
                    },
                    error => reject(error)
                )
        })
    }

    initMap() {
        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition().then(
                position => {
                    const styledMapType = new google.maps.StyledMapType(environment.google.style);
                    const latLng = new google.maps.LatLng({ lat: position.coords.latitude, lng: position.coords.longitude})
                    const options = {
                        center: latLng,
                        zoom: 15,
                        disableDefaultUI: true
                    }
                    this.map = new google.maps.Map(document.getElementById('google-map-container'), options);
                    this.map.mapTypes.set('styled_map', styledMapType);
                    this.map.setMapTypeId('styled_map');
                    resolve(true);
                },
                () => {
                    reject('Could not initalize map.');
                }
            )
        })
    }

    loadSDK() {
        return new Promise((resolve, reject) => {
            if (!this.mapsLoaded) {
                this.injectSDK()
                    .then( 
                        () => resolve(true),
                        error => reject(error) )
            } else {
                resolve(true);
            }
        })
    }

    injectSDK() {
        return new Promise((resolve, reject) => {
            window['mapsInit'] = () => {
                this.mapsLoaded = true;
                resolve(true);
            }

            let script = document.createElement('script');
            script.id = 'google-maps';
            script.onerror = () => reject('SDK Error');

            if(this.apiKey){
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapsInit';
            } else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapsInit';
            }

            document.body.appendChild(script);
        })
    }
}
