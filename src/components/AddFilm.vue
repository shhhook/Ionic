<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <span v-if="newFilm">Add Film</span>
                <span v-else>Edit Film</span>
            </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-item>
                <ion-label position="floating">
                    Film name
                </ion-label>

                <ion-input type="text" :value="name" v-model="name" name="name"
                           @input="changeValue($event.target.name, $event.target.value)"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="floating">
                    Film category
                </ion-label>

                <ion-input type="text" :value="category" v-model="category" name="category"
                           @input="changeValue($event.target.name, $event.target.value)"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="floating">
                    Film description
                </ion-label>

                <ion-textarea v-model="description" :value="description" name="description"
                              @input="changeValue($event.target.name, $event.target.value)"></ion-textarea>
            </ion-item>

            <ion-button type="submit" color="primary" @click="checkValues">
                <span v-if="newFilm">Add</span>
                <span v-else>Edit</span>
            </ion-button>

            <ion-button color="danger" class="ion-float-right" @click="cancelAddingFilm">Cancel</ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script>
    /* eslint-disable */

    export default {
        name: "AddFilm",
        props: {
            "cancelAddingFilm": Function,
            "addFilm": Function,
            "newFilm": Boolean,
            "Film": Object,
            "index": Number
        },
        data: () => {
            return {
                name: "",
                category: "",
                description: ""
            }
        },
        methods: {
            checkValues(e) {
                let film = {
                    name: this.name,
                    category: this.category,
                    description: this.description
                };

                let values = Object.values(film);

                for (let value of values) {
                    if (value === "") {
                        return null;
                    }
                }

                this.addFilm(film, this.index);
            },
            changeValue(name, value) {
                this[name] = value;
            }
        },
        mounted(){
            if(this.newFilm){
                return null;
            }

            this.name = this.Film.name;
            this.category = this.Film.category;
            this.description = this.Film.description;
        }
    }
</script>
