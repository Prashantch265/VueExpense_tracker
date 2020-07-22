<template>
<div class="container col-md-6 col-xl-4 my-5">
    <div class="card bg-light p-4">
        <form class="form" @submit.prevent="add">
            <input type="text" v-model="name" class="form-control " id="name" placeholder="Expense name"/>

            <input type="number" v-model="amount" min="1" step="any" class="form-control " id="amount" placeholder="Amount"/>

            <input type="date" v-model="date" class="form-control" id="date" placeholder="Date"/>

            <input type="submit" class="btn btn-primary mt-3" value="Submit"/> 
        </form>
    </div>
</div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
import {mapActions} from 'vuex'

export default {
    name: "AddExpense",
    data() {
        return{
            name: '',
            amount: '',
            date: ''
        }
    },
    methods:{
        // addExpense(){
        //     const newExpense = {
        //         // id: uuidv4(),
        //         name: this.name,
        //         amount: this.amount,
        //         date: this.date,
        //         payment: false
        //     }
        //     // send up to parent
        //     this.$emit('add-Expense', newExpense);

        //     this.name = '',
        //     this.amount = '',
        //     this.date = ''
        // }
        ...mapActions(['addExpense']),
        add(){
            const newExpense = {
                name: this.name,
                amount: this.amount,
                date: this.date
            }
            this.addExpense(newExpense);

            this.name = '',
            this.amount = '',
            this.date = ''
        }
    }  
}
</script>

<style scoped>
    .form-control{
        margin-top: 10px;
    }
</style>