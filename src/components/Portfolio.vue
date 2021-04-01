<template>
  <div class="mx-5 mt-10 page-fade-in">
        <div class="mb-6">
          <div>
            <a href="https://github.com/mojiwa/mojiwa.com" target="_blank" rel="noopener noreferrer">
              <span @click="slideElement('mojiwa')" class="w-auto text-2xl mb-8 cursor-pointer hover:text-teal-600 transition-colors ease-in-out duration-500">
                mojiwa.com <br/>(opens on GitHub)
              </span>
            </a>                    
          </div>
        </div>
        <div class="mb-2">
          <div class="flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500" @click="slideElement('library')">
            <span class="text-2xl mr-2">Library</span>
              <svg 
                class="self-center"
                :class="libraryDown ? 'hidden' : ''"
                fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
                <path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
              </svg>
              <svg 
                class="self-center"
                :class="libraryDown ? '' : 'hidden'"
                fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
                <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
              </svg>
          </div>
          <div id="library" class="slide-up mt-2">
            <span class="md:text-base">
              Developed with a MySQL + Node Express backend, and React (TypeScript) with Tailwind CSS on the front-end.
              <br />The project was to develop an easily maintainable library where end-users could checkout or reserve books themselves without needing to bother admin staff.
              <br />Functionality includes:
              <li>Adding books</li>
              <li>Removing books</li>
              <li>Checking out books</li>
              <li>Reserving books</li>
              <li>Live updating for all connected browsers</li>
              <li>Email notifications for checkouts, reservations, overdue books</li>
              <li>Notifications within the browser for overdue books</li>
            </span>
            <br/>
            <a href="https://www.youtube.com/embed/4fu9WvQOjGY" target="_blank" rel="noopener noreferrer">
              <img 
                src="../assets/images/site-demo.png"                 
                alt="Library Site Demo"
                :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
                class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 w=1/3" />
            </a>            
          </div>
        </div>
        <div class="mb-2">
          <div class="flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500" @click="slideElement('tagbot')">
              <span class="text-2xl mr-2">TagBot</span>
              <svg 
                :class="tagbotDown ? 'hidden' : ''"
                class="self-center"
                fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
                <path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
              </svg>
              <svg 
                class="self-center"
                :class="tagbotDown ? '' : 'hidden'"
                fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
                <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
              </svg>
          </div>
          <div id="tagbot" class="slide-up mt-2">                
            <span class="md:text-base">
              This project was developed using Docker running multiple Linux containers to host MySQL, Python with Flask, and NGINX.
              <br />The front-end was created entirely using vanilla JS, html, and pure css.
              <br />The goal of the project was to create the ability to create and manage custom tag groups that could be ultilised within Google Chat. 
              <br />Functionality includes:
              <li>Adding TagBot to any room</li>
              <li>Searching for pre-existing tag groups per room</li>
              <li>A web interface to create, delete and manage custom tag groups</li>
            </span>
            <br/>
            <a href="../assets/images/tagbot2.png" target="_blank" rel="noopener noreferrer">
              <img 
                src="../assets/images/tagbot2.png"                 
                alt="TagBot Screenshot"
                :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
                class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 w-64" />
            </a>
          </div>
        </div>        
        <div class="mb-6">
          <span class="w-auto text-1xl mb-8">More on the way...</span>
        </div>
      </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentPage", "Portfolio");
  },
  data() {
    return {
      libraryDown: false,
      tagbotDown: false,
    }
  },
  methods: {
    slideElement(elementId) {
      var element = document.getElementById(elementId);
      if (element?.classList.contains('slide-down')) {
        element?.classList.remove('slide-down');
        element?.classList.add('slide-up');
      } else {
        element?.classList.add('slide-down');
        element?.classList.remove('slide-up');
      }

      if (elementId === 'library') {
        this.libraryDown = !this.libraryDown;
      }
      if (elementId === 'tagbot') {
        this.tagbotDown = !this.tagbotDown;
      }
    },
  }
}
</script>

<style>

</style>