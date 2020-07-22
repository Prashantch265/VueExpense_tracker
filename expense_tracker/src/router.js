import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import AddExpenses from './views/add'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add',
            name: 'add',
            component: AddExpenses
        }
    ]
})