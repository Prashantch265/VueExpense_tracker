import axios from 'axios'

const state = {
    expenses: []
};

const getters = {
    allExpenses: state => state.expenses
};

const actions = {
    async fetchExpenses({ commit }){
        const res = await axios.get('http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses');

        commit('setExpenses', res.data);
        // console.log(res.data);
    },

    async addExpense({ commit }, name, amount, date){
        const res = await axios.post('http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses', {name, amount, date, payment: false});

        commit('newExpense', res.data);
    },

    async deleteExpense({ commit }, id){
        await axios.delete(`http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses/${id}`);

        commit('delExpense', id);
    },

    async searchExpense({ commit }, date){
        const res = await axios.get(`http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses?date=${date}`);

        commit('setExpenses', res.data);
    },

    async filterExpenses( e){
        
        console.log(e);
    }
};

const mutations = {
    setExpenses: (state, expenses) => (state.expenses = expenses),
    newExpense: (state, expense) => state.expenses.unshift(expense),
    delExpense: (state, id) => state.expenses = state.expenses.filter(expenses => expenses.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};