<template>
    <div class="cinema__film">
        <p class="cinema__film-title">
            {{ title }}
        </p>

        <p class="cinema__film-date">
            Дата сеанса: {{ getDate }}
        </p>

        <div class="cinema__film-controls">
            <router-link :to="{name: 'edit', params: {sessionId: title}}"
                         v-slot="{ href, route, navigate, isActive, isExactActive }">
                <a class="button button-icon cinema__film-edit"
                   :href="href">
                    <i class="far fa-edit"></i>
                </a>
            </router-link>

            <button class="button button-icon cinema__film-remove" @click="removeSession" :data-key="title">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            session: Object,
            removeSession: {
                type: Function
            }
        },
        computed: {
            getDate: function () {
                let date = new Date(this.session.date);
                return ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
            }
        }
    }
</script>
