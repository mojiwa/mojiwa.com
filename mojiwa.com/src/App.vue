<template>
  <div 
  class="container mx-auto font-openSans"
  :class="state.theme === 'Dark' ? 'text-gray-300' : 'text-gray-900'">
    <ThemeBar @set-theme-light="setTheme('Light')" @set-theme-dark="setTheme('Dark')" />
    <div class="flex justify-between" v-if="this.$store.state.currentPage !== 'Home'"><NavBar /></div>    
    <router-view />
  </div>  
</template>

<script>
  import "./assets/styles/main.css";
  import "./assets/styles/custom.css";  
  import ThemeBar from "./components/Theme-Bar";
  import NavBar from "./components/Nav-Bar";

export default {
  name: "App",
  components: {
    NavBar,    
    ThemeBar,      
  },
  beforeMount() {
    const savedTheme = window.localStorage.getItem(this.themeKey);
    if (savedTheme === null || savedTheme === "Dark") {        
      this.setTheme("Dark")
    }
    else
      this.setTheme("Light")
  },   
  data() {
    return {
      state: this.$store.state,
      themeKey: "THEME",
      darkHex: "#1A202C",
      lightHex: "#E2E8F0",
    }
  },
  methods: {
    setTheme(theme) {
      document.body.style.backgroundColor = theme === "Dark" ? this.darkHex : this.lightHex;
      // set the state in store to the current theme
      this.$store.commit("setTheme", theme);            
      // Persist the user's theme selection
      window.localStorage.setItem(this.themeKey, theme);
    }
  }
}
</script>

<style>

</style>