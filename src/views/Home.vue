<template>
    <div>
        <div class="cinema__header">
            <div class="cinema__header-wrapper">
                <h1 class="cinema__title">Сеансы</h1>

                <router-link to="/add" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a class="button button-icon cinema__add-session"
                       :href="href">
                        <i class="fas fa-plus"></i>
                    </a>
                </router-link>

                <div class="cinema__logo-wrapper">
                    <img src="../assets/logo.png" alt="logo">
                </div>
            </div>
        </div>

        <div class="cinema__list-wrapper">
            <h4 class="cinema__list-title">
                Список сеансов
            </h4>

            <div class="cinema__list">
                <template v-for="(session, key) in sessions">
                    <FilmInfo :key="key"
                              :title="key"
                              :session="session"
                              :removeSession="removeSession"></FilmInfo>
                </template>

                <p class="cinema__list-empty" v-if="!isEmpty()">На данный момент сеансов нету :(</p>
            </div>
        </div>
    </div>
</template>

<script>
    import FilmInfo from '@/components/FilmInfo.vue';

    export default {
        data() {
            return {
                sessions: {}
            }
        },
        components: {
          FilmInfo
        },
        methods: {
            removeSession(e) {
                let $target = $(e.currentTarget);
                let key = $target.attr('data-key');

                if (!key) {
                    return null;
                }

                if (!this.sessions.hasOwnProperty(key)) {
                    return null;
                }

                delete this.sessions[key];

                localStorage.setItem('sessions', JSON.stringify(this.sessions));

                this.$forceUpdate();
            },
            isEmpty() {
                return Object.keys(this.sessions).length;
            }
        },
        created() {
            let oldSessions = JSON.parse(localStorage.getItem('sessions'));

            if (!oldSessions) {
                return null;
            }

            this.sessions = oldSessions;
        }
    }
</script>
