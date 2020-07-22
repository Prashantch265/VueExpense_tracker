<template>
    <div class="card bg-light mb-3" v-bind:class="{'paid':expense.payment}">
        <div class="card-body">
        <h4 class="card-title"> {{expense.name}} </h4>
            Amount: {{expense.amount}} <br/>
            Payment: <input type="checkbox" v-on:change="markComplete"/>

            <div class="del col-2 ml-auto">
            <button type="button" class="btn btn-danger"
            @click="deleteExpense(expense.id)">X</button>
            </div>
        </div>
        <div class="card-footer text-muted">
            {{expense.date}}
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "ExpenseItem",
    props: ["expense"],
    methods: {
        markComplete(){
            this.expense.payment =! this.expense.payment;
        },
...mapActions(['deleteExpense'])
    }
}
</script>

<style scoped>
    .card{
        text-align: center;
    }

    .paid{
        color: rgb(19, 231, 19);
    }

    .del{
      top: -50px;  
    }

</style>