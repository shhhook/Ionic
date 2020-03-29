;(function () {
    const Add = {
        template: `
            <div>
                <div class="cinema__header">
                    <div class="cinema__header-wrapper">
                        <h1 class="cinema__title">Добавить</h1>
                        
                        <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <a class="button" 
                               :href="href">
                                <i class="fas fa-home"></i>
                            </a>
                        </router-link>
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
        `,
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
    };

    const Edit = {
        template: `
            <div>
                <div class="cinema__header">
                    <div class="cinema__header-wrapper">
                        <h1 class="cinema__title">Изменить</h1>
                        
                        <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <a class="button" 
                               :href="href">
                                <i class="fas fa-home"></i>
                            </a>
                        </router-link>
                    </div>
                </div>
            
                <div class="cinema__form-wrapper" v-if="currentSession">
                    <div class="cinema__form-group">
                        <label for="name" class="cinema__label">
                            Название фильма
            
                            <input type="text" id="name" name="name" class="cinema__input" :value="$route.params.sessionId">
                        </label>
                    </div>
            
                    <div class="cinema__form-group">
                        <label for="date" class="cinema__label">
                            Дата премьеры
            
                            <input type="date" id="date" name="date" class="cinema__input" :value="currentSession.date">
                        </label>
                    </div>
            
                    <div class="cinema__form-group">
                        <button class="button cinema__form-add" @click="editSession">Изменить</button>
                    </div>
                </div>
            </div>
        `,
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
    };

    const Index = {
        template: `
            <div>
                <div class="cinema__header">
                    <div class="cinema__header-wrapper">
                        <h1 class="cinema__title">Сеансы</h1>
                        
                        <router-link to="/add" v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <a class="button cinema__add-session" 
                               :href="href">
                                <i class="fas fa-plus"></i>
                            </a>
                        </router-link>
                    </div>
                </div>
            
                <div class="cinema__list-wrapper">
                    <h4 class="cinema__list-title">
                        Список сеансов
                    </h4>
            
                    <div class="cinema__list">
                        <div class="cinema__film" v-for="session, key in sessions">
                            <p class="cinema__film-title">
                                {{ key }}
                            </p>
            
                            <p class="cinema__film-date">
                                {{ session.premiereDate }}
                            </p>
            
                            <div class="cinema__film-controls">
                                <router-link :to="{name: 'edit', params: {sessionId: key}}" v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <a class="button cinema__film-edit" 
                                       :href="href">
                                        <i class="far fa-edit"></i>
                                    </a>
                                </router-link>
            
                                <button class="button cinema__film-remove" @click="removeSession" :data-key="key">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        data() {
            return {
                sessions: {}
            }
        },
        methods: {
            removeSession(e){
                let $target = $(e.currentTarget);
                let key = $target.attr('data-key');

                if (!key){
                    return null;
                }

                if (!this.sessions.hasOwnProperty(key)){
                    return null;
                }

                delete this.sessions[key];

                localStorage.setItem('sessions', JSON.stringify(this.sessions));

                this.$forceUpdate();
            }
        },
        created(){
            let oldSessions = JSON.parse(localStorage.getItem('sessions'));

            if(!oldSessions){
                return null;
            }

            this.sessions = oldSessions;
        }
    };

    const routes = [
        {path: '/add', component: Add},
        {path: '/edit/:sessionId', name: 'edit', component: Edit},
        {path: '*', component: Index}
    ];

    const router = new VueRouter({
        routes
    });

    const app = new Vue({
        router
    }).$mount('#app');
})();