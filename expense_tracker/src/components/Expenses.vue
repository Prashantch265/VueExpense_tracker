<template>
  <div>
    <Sort />
    <div class="container-fluid mt-5">
      <div v-bind:key="expense.id" v-for="expense in allExpenses">
        <ExpenseItem v-bind:expense="expense"/>
      </div> 
    </div>
  </div>
</template>

<script>
import ExpenseItem from './ExpenseItem';
import Sort from './SortExpenses';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Expenses",
  components:{
    ExpenseItem,
    Sort
  },
  // props:["expenses"],
  computed: mapGetters(['allExpenses']),
  methods:{
    ...mapActions(['fetchExpenses'])
  },
  created(){
    this.fetchExpenses(); 
  }
}
</script>