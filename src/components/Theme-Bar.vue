<template>
    <div className="mr-2 mt-2 flex justify-end">
        <button
            @click="$emit('set-theme-light')"                        
            class="flex text-xs p-1 focus:outline-none transform-transition duration-300 hover:shadow-grayOutline bg-gray-300 mr-1 text-gray-900 rounded-l-lg h-6 px-2 hover:bg-gray-200"
            :class="state.theme === 'Light' ? 'hover:shadow-none' : ''">
            <span style="align-self:center">Light</span>
        </button>
        <button
            @click="$emit('set-theme-dark')"       
            class="flex text-xs p-1 focus:outline-none transform-transition duration-300 hover:shadow-grayOutline bg-gray-800 text-gray-300 rounded-r-lg h-6 px-2 hover:bg-gray-900"
            :class="state.theme === 'Dark' ? 'hover:shadow-none' : ''">
            <span style="align-self:center">Dark</span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: this.$store.state,
        }
    },
    methods: {
        setTheme(theme) {
            this.$store.commit('setTheme', theme);
        }
    },
}
</script>

<style>

</style>