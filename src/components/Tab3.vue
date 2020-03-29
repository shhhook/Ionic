<template>
    <ion-page class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Hobbies</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-list>
                <ion-item class="item">
                    <ion-thumbnail slot="start" class="item__image-wrapper">
                        <ion-icon name="code" class="item__image"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>Programming</ion-label>
                </ion-item>

                <ion-item class="item">
                    <ion-thumbnail slot="start" class="item__image-wrapper">
                        <ion-icon name="rocket" class="item__image"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>Tennis</ion-label>
                </ion-item>

                <ion-item class="item">
                    <ion-thumbnail slot="start" class="item__image-wrapper">
                        <ion-icon name="rocket" class="item__image"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>Video games</ion-label>
                </ion-item>

                <ion-item class="item">
                    <ion-thumbnail slot="start" class="item__image-wrapper">
                        <ion-icon name="musical-note" class="item__image"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>Music</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    export default {
        name: 'tab3',
    }
</script>
