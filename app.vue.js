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
        updatetodo() {
            this.todos.splice(this.selectedindex, 1, this.todo),
                this.isedditing = false

        },
        deletetodo(index) {
            this.todos.splice(index, 1)

        }
    }
}
Vue.createApp(App).mount('#app')