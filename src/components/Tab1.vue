<template>
    <ion-page class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>General</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-item>
                <img src="@/assets/myPhoto.jpg" class="my-photo">
            </ion-item>

            <ion-item>
                <ion-label>Surname: </ion-label>
                <ion-label class="ion-text-wrap">
                    Hodzitsky
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-label>Group: </ion-label>
                <ion-label class="ion-text-wrap">
                    302
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-label>Specialty: </ion-label>
                <ion-label class="ion-text-wrap">
                    Computer science
                </ion-label>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script>
    export default {
        name: "tab1",
        methods: {
            nextPage() {
                this.$router.push("/tab1/details");
            }
        }
    };
</script>
