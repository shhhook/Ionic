<template>
    <div>
        <div class="cinema__header">
            <div class="cinema__header-wrapper">
                <h1 class="cinema__title">Добавить</h1>

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

        <div class="cinema__form-wrapper">
            <div class="cinema__form-group">
                <label for="name" class="cinema__label">
                    Название фильма

                    <input type="text" id="name" name="name" class="cinema__input">
                </label>
            </div>

            <div class="cinema__form-group">
                <label for="date" class="cinema__label">
                    Дата премьеры

                    <input type="date" id="date" name="date" class="cinema__input">
                </label>
            </div>

            <div class="cinema__form-group">
                <button class="button cinema__form-add" @click="addSession">Добавить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            addSession(){
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

                this.setNewSession({
                    [nameValue]: {
                        date: dateValue
                    }
                });

                this.$router.push({ path: '/' });
            },
            setNewSession(sessionInfo){
                let oldSessions = JSON.parse(localStorage.getItem('sessions'));

                let newSessions = Object.assign({}, oldSessions, sessionInfo);

                localStorage.setItem('sessions', JSON.stringify(newSessions));
            }
        }
    }
</script>
