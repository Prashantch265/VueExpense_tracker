<template>
  <div>
    <!-- <AddExpense v-on:add-Expense="addExpense"/> -->
    <Expenses/>
  </div>
</template>

<script>
import Expenses from '../components/Expenses';
// import axios from 'axios';


export default {
  name: 'home',
  components: {
    Expenses
  },
  // data(){
  //   return{
  //     expenses:[]
  //   }
  // },
  // methods:{
    // deleteItem(id){
    //   // axios.delete(`http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses/${id}`)
    //   // .then(res => this.expenses = this.expenses.filter( expense => expense.id !== id))
    //   // .catch(err => console.log(err));
    //   this.expenses = this.expenses.filter( expense => expense.id !== id)
    // },
    // addExpense(newExpense){
    //   const {name, amount, date, payment} = newExpense;
    //   axios.post('http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses',{
    //     name,
    //     amount,
    //     date,
    //     payment
    //   })
    //   .then(res => this.expenses = [...this.expenses, res.data])
    //   .catch(err => console.log(err));
    //   // this.expenses = [...this.expenses, newExpense];
    // }
  // },
  // created(){
  //   axios.get('http://my-json-server.typicode.com/Prashantch265/Fake-server/expenses')
  //   .then(res => this.expenses = res.data)
  //   .catch(err => console.log(err));
  // }
}
</script>

