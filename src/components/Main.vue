<template>
    <NavBar />
    <router-view />
</template>

<script>
    import NavBar from "./Nav-Bar.vue";
    export default {    
        components: {
            NavBar,
        }
    }   
</script>

<style>

</style>