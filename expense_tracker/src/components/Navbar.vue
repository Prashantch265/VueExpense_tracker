<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand h1 mb-0 mx-auto">
                <router-link to="/" class="link">Expenses</router-link>
            </span>
            
            <button type="button" class="btn btn-danger">
                <router-link to="/add" class="link">+ Add</router-link>
            </button>
            
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .link{
        text-decoration: none;
        color: ghostwhite;
    }
</style>