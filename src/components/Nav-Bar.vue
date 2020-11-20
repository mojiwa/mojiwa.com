<template>
    <div class="flex justify-evenly">
        <router-link 
        v-for="item in list" :key="item.to" 
        class="mx-2 focus:outline-none"
        :to="item.to">
            <button                     
            class="mx-2 focus:outline-none">
                <span 
                class="text-lg transform-transition duration-300 hover:text-teal-600"
                :class="this.$store.state.currentPage === item.title ? 'text-teal-600' : ''">
                    {{ item.title }}
                </span>
            </button>
        </router-link>
        <a href="https://medium.com/@timetraveller_x" target="blank">
            <button                     
            class="mx-2 focus:outline-none">
                <span 
                class="text-lg transform-transition duration-300 hover:text-teal-600">
                    Blog
                </span>
            </button>
        </a>
    </div>
</template>

<script>
export default {
    data() {        
        return {
            list: [
                { title: "Home", to: '/' },
                { title: "About", to: '/about' },
                { title: "Portfolio", to: '/portfolio' },
                { title: "Contact", to: '/contact' },                
            ],        
        }
    },    
    computed: {
        
    },
    methods: {
    }
}
</script>

<style>

</style>