<template>
    <ion-page class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Films</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-list>
                <ion-list-header>
                    <ion-label>Films</ion-label>
                    <ion-button shape="round" fill="outline" color="success" @click="addOpen()">
                        Add
                    </ion-button>
                </ion-list-header>

                <AddFilm v-if="showAddFilm"
                         :cancelAddingFilm="addClose"
                         :addFilm="addFilm"
                         :newFilm="true"></AddFilm>

                <div v-for="(film, index) in films" :key="index">
                    <ion-item-sliding>
                        <ion-item-options side="start">
                            <ion-item-option color="primary" @click="editFilm(index)">
                                Edit
                            </ion-item-option>

                            <ion-item-option color="danger" @click="removeFilm(index)">
                                Remove
                            </ion-item-option>
                        </ion-item-options>
                        <ion-item>
                            <ion-icon name="film" slot="start"></ion-icon>
                            <ion-label>
                                {{ film.name }}
                            </ion-label>

                            <ion-note slot="end">
                                {{ film.category }}
                            </ion-note>
                        </ion-item>
                    </ion-item-sliding>

                    <AddFilm v-if="showEdit === index"
                             :cancelAddingFilm="editFilmClose"
                             :addFilm="addFilm"
                             :newFilm="false"
                             :Film="film"
                             :index="index"></AddFilm>

                </div>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    /* eslint-disable */

    import {
        add,
        film
    } from "ionicons/icons";

    import {
        addIcons
    } from "ionicons";

    import AddFilm from './AddFilm';

    addIcons({
        "ios-add": add.ios,
        "md-add": add.md,
        "ios-film": film.ios,
        "md-film": film.md,
    });

    export default {
        name: "Films",
        data: () => {
            return {
                films: [
                    {
                        "name": "Furious",
                        "category": "Actions",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur consequuntur, cupiditate excepturi harum illo ipsa iste itaque iusto nihil nisi nostrum obcaecati quis ratione rem repellat similique, sit unde!"
                    }
                ],
                showAddFilm: false,
                showEdit: -1
            }
        },
        methods: {
            addFilm(film, index) {
                if (index) {
                    this.films[index] = film;
                    this.showEdit = -1;
                } else {
                    this.films.push(film);
                    this.addClose();
                }
            },
            removeFilm(index) {
                this.films.splice(index, 1);
            },
            editFilm(index) {
                this.showEdit = index;
            },
            editFilmClose() {
                this.showEdit = -1;
            },
            addClose() {
                this.showAddFilm = false;
            },
            addOpen() {
                this.showAddFilm = true;
            }
        },
        components: {
            AddFilm
        }
    };
</script>
