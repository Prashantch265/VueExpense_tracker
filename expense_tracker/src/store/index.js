import Vuex from 'vuex'
import Vue from 'vue'
import expenses from './modules/expenses'

//load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules:{
        expenses
    }
});