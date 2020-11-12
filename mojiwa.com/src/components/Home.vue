<template>
  <div id="home-page">
        <div class="w-full p-2 font-thin center-content text-center cursor-default">
            <span class="text-4xl md:text-5xl">Hi, I'm <span class='font-normal text-teal-600'>Mo Jiwa</span>.</span>
            <br />
            <span class="text-2xl md:text-3xl">I'm a full-stack web and software developer</span>
            <div>                
                <button        
                    @mouseover="hover"
                    @mouseleave="stopHover"                    
                    class="see-more-button mt-4 focus:outline-none font-thin text-xl md:text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600"
                    :class="state.theme === 'dark' ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'">
                        See More  
                        <svg id='see-more-svg' class='inline transition-transform duration-300' height="20px" width="20px" fill="currentColor" view-box="0 0 20 20">
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                </button>                
            </div>
        </div>          
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: this.$store.state,
        }
    },
    computed: {
        
    },
    methods: {
        hover() {
            document.getElementById("see-more-svg")?.classList.add("rotate-svg");
        },
        stopHover() {
            document.getElementById("see-more-svg")?.classList.remove("rotate-svg");
        }
    }
}
</script>

<style>

</style>