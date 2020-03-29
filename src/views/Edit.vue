<template>
    <div>
        <div class="cinema__header">
            <div class="cinema__header-wrapper">
                <h1 class="cinema__title">Изменить</h1>

                <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a class="button button-icon"
                       :href="href">
                        <i class="fas fa-home"></i>
                    </a>
                </router-link>

                <div class="cinema__logo-wrapper">
                    <img src="../assets/logo.png" alt="logo">
                </div>
            </div>
        </div>

        <div class="cinema__form-wrapper" v-if="currentSession">
            <div class="cinema__form-group">
                <label for="name" class="cinema__label">
                    Название фильма

                    <input type="text"
                           id="name"
                           name="name"
                           class="cinema__input"
                           :value="$route.params.sessionId">
                </label>
            </div>

            <div class="cinema__form-group">
                <label for="date" class="cinema__label">
                    Дата премьеры

                    <input type="date"
                           id="date"
                           name="date"
                           class="cinema__input"
                           :value="currentSession.date">
                </label>
            </div>

            <div class="cinema__form-group">
                <button class="button cinema__form-add"
                        @click="editSession">Изменить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        date(){
            return{
                currentSession: {},
                sessions: {}
            }
        },
        methods: {
            editSession(){
                let $form = $('.cinema__form-wrapper');

                if (!$form.length){
                    return null;
                }

                let $name = $form.find('#name');
                let $date = $form.find('#date');

                if (!$name.length || !$date.length){
                    return null;
                }

                let nameValue = $name.val();
                let dateValue = $date.val();

                if (!nameValue || !dateValue){
                    return null;
                }

                this.setNewSessionValues({
                    [nameValue]: {
                        date: dateValue
                    }
                });
            },
            setNewSessionValues(sessionInfo){
                let newName = Object.keys(sessionInfo)[0];

                if (this.$route.params.sessionId !== newName){
                    if(this.sessions.hasOwnProperty(newName)){
                        return null;
                    }
                }

                delete this.sessions[this.$route.params.sessionId];

                this.sessions = Object.assign({}, this.sessions, sessionInfo);

                localStorage.setItem('sessions', JSON.stringify(this.sessions));

                this.$router.push({ path: '/' });
            }
        },
        created() {
            this.sessions = JSON.parse(localStorage.getItem('sessions'));

            if (!this.sessions) {
                return null;
            }

            if (!this.sessions.hasOwnProperty(this.$route.params.sessionId)) {
                this.$router.push({ path: '/' });

                this.currentSession = {};
            }

            this.currentSession = this.sessions[this.$route.params.sessionId];
        }
    }
</script>
