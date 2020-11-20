<template>
  <div class="page-fade-in md:mx-5 mt-10">
    <div class="flex-row">
      <router-link to="/contact">
        <img 
          src="/images/mo-jedi.jpg" 
          alt='Mo Jiwa'              
          :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'" 
          class="w-3/6 sm:w-64 sm:h-auto sm:ml-2 ml-1/4 border-solid border-2 rounded-md md:border-4 my-image cursor-pointer" />   
      </router-link>         
      <div class="text-base mt-4 md:text-base ml-2">
        <p>I am a software developer based in the UK. I work for a company that designs and builds commodities and financial trading software.</p>
        <br/>
        <p>I primarily work with MSSQL and .Net (C# | WPF), but have found myself venturing more into the world of web development and devOps, working in a 
        Linux, Docker, MySQL, Python, Node, React, and Vue3 with which I have created a number of <router-link to="/portfolio"><span class="transition-colors duration-300 ease-in-out underline cursor-pointer hover:text-teal-600">internal tools and hackathon projects.</span></router-link></p>
        <p>My current undertaking is getting stuck in with the latest release (v3) of Vue, which is proving to be a very insightful and exciting learning experience. In fact, this site was made using Vue3.</p>
        <br/>
        <p>When I'm not coding for work, aside from being a parent, I do still find the time to code for fun as well as get stuck in gaming, being a Dungeon Master, DJing, looking at the stars, or something else geeky...</p>
        <br />              
      </div>            
      <div class="w-4/5 md:w-1/2 md:flex justify-between">
        <div class="animated-list mt-4">
          <label class="transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4 border-teal-600 border-l-4 px-4">Skills</label>
          <ul>                
              <li v-for="item in skills" :key="item" class="ml-6"><label>{{ item }}</label></li>
          </ul>
        </div>
        <div class="animated-list my-4">
          <label class="transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4 border-teal-600 border-l-4 pl-4">Weapons of Choice</label>
          <ul>
              <li v-for="item in tools" :key="item" class="ml-6"><label>{{ item }}</label></li>
          </ul>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentPage", "About");
  },
  data() {
    return {
      skills: [
        "C#",
        "WPF",
        "SQL",
        "Powershell",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Agile: Scrum | Kanban",
        "TDD",
        "Coded UI",
        "Vue(v3)",
        "The Force",
      ],
      tools: [
        "Visual Studio",
        "Visual Studio Code",
        "Rider",
        "MSSQL",
        "MySQL",
        "Git",
        "Docker",
        "Hyper-V",
        "NUnit",  
        "Node.js",  
        "Tailwind CSS",
        "Lightsaber (green, of course)",
      ],
    }
  },
}
</script>

<style>

</style>