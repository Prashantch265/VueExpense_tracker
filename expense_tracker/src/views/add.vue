<template>

        <AddExpense v-on:add-Expense="addExpense"/>
    
</template>

<script>
import AddExpense from '../components/AddExpenses'
import axios from 'axios'

export default {
    name: "add",
    components:{
        AddExpense
    },
    methods:{
        addExpense(newExpense){
            const {name, amount, date, payment} = newExpense;
            axios.post('http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses',{
                name,
                amount,
                date,
                payment
            })
            .then(res => this.expenses = [...this.expenses, res.data])
            .catch(err => console.log(err));
            // this.expenses = [...this.expenses, newExpense];
            }
        }
    }
</script>