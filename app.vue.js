const App = {
    data() {
        return {
            selectedindex: null,
            isedditing: false,
            todo: '',
            todos: [
                'my name is adnan', 'what is your name'
            ],

        }
    },
    methods: {
        storetodo() {
            this.todos.push(this.todo),
                this.todo = ''
        },
        edittodo(index, todo) {
            this.todo = todo
            this.selectedindex = index
            this.isedditing = true


        },
        updatetodo(index, todo) {

        }
    }
}
Vue.createApp(App).mount('#app')