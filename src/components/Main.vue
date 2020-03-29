<template>
    <div>
        <ion-tabs>
            <ion-tab tab="/tab1">
                <ion-vue-router name="tab1"></ion-vue-router>
            </ion-tab>

            <ion-tab tab="/tab2">
                <ion-vue-router name="tab2"></ion-vue-router>
            </ion-tab>

            <ion-tab tab="/tab3">
                <ion-vue-router name="tab3"></ion-vue-router>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="/tab1">
                    <ion-icon name="information-circle-outline"/>
                    <ion-label>Tab 1</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="/tab2">
                    <ion-icon name="call"/>
                    <ion-label>Tab 2</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="/tab3">
                    <ion-icon name="globe"/>
                    <ion-label>Tab 3</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </div>
</template>

<script>
    import {
        informationCircleOutline,
        globe,
        call,
        code,
        rocket,
        musicalNote
    } from "ionicons/icons";

    import {
        addIcons
    } from "ionicons";

    addIcons({
        "ios-globe": globe.ios,
        "md-globe": globe.md,
        "ios-information-circle-outline": informationCircleOutline.ios,
        "md-information-circle-outline": informationCircleOutline.md,
        "ios-call": call.ios,
        "md-call": call.md,
        "ios-code": code.ios,
        "md-code": code.md,
        "ios-rocket": rocket.ios,
        "md-rocket": rocket.md,
        "ios-musical-note": musicalNote.ios,
        "md-musical-note": musicalNote.md,
    });
    export default {
        name: "Main",
        props: {}
    };
</script>
