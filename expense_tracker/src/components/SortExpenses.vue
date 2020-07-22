<template>
    <div class="container col-md-9 mt-3">
        <form class="form-inline" @submit.prevent="search()">
            <div class="form-group row">
                <input class="form-control mr-sm-2" v-model="date" type="date" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>

            <div class="form-group row ml-auto">
                <label class="FormControlSelect">Filter :</label>
                    <select @change="filterExpenses($event)" class="form-control col-sm-6 ml-3" id="FormControlSelect">
                    <option>today</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    </select>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "Sort",
    data(){
        return {
            date: ''
        }
    },
    methods:{
        // Search(){
        //     const searchDate= {
        //         date: this.date
        //     }
        //     console.log(searchDate);
        ...mapActions(['searchExpense','filterExpenses']),
        search(){
            const searchDate= {
                date: this.date.slice(0,11)
            }
            this.searchExpense(searchDate);
            console.log(searchDate);
        }

    }
}
</script>

<style scoped>
    .FormControlSelect{
        font-size: 25px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>