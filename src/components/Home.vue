<template>
  <div class="center-home-page page-fade-in">
        <div class="w-full p-2 font-thin text-center cursor-default">
            <span class="text-4xl md:text-5xl">Hi, I'm <span class="font-normal text-teal-600">Mo Jiwa</span>.</span>
            <br />
            <span class="text-3xl">I'm a full-stack web and software developer</span>
            <div>
                <router-link :to="'/about'">
                    <button
                    @click="this.$store.commit('setCurrentPage', 'About')"
                    class="see-more-button mt-4 focus:outline-none font-thin text-xl md:text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600"
                    :class="state.theme === 'Dark' ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'">
                        See More                          
                        <svg id="see-more-svg" class="inline" height="20px" width="20px" fill="currentColor" view-box="0 0 20 20">
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>                              
                    </button>    
                </router-link>
            </div>
        </div>          
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("setCurrentPage", "Home");
    },
    data() {
        return {
            state: this.$store.state,            
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