const App = {
    data() {
        return {
            todo: '',
            todos: [
                'my name is adnan', 'what is your name'
            ]
        }
    },
    methods: {
        storetodo() {
            this.todos.push(this.todo),
                this.todo = ''
        }
    }
}
Vue.createApp(App).mount('#app')