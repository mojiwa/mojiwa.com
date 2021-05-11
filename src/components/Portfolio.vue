<template>
  <div class="mx-5 mt-10 page-fade-in">      
    <div class="mb-2">
      <div class="flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500" @click="slideElement('azure')">
        <span class="text-2xl mr-2">Azure DevOps Tracker</span>
          <svg 
            class="self-center"
            :class="azureDown ? 'hidden' : ''"
            fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
            <path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
          </svg>
          <svg 
            class="self-center"
            :class="azureDown ? '' : 'hidden'"
            fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
            <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
          </svg>
      </div>
      <div id="azure" class="slide-up mt-2">
        <span class="md:text-base">
          Track your favourite Azure DevOps work items. <br/>
          This extension allows the user to navigate to and track Azure DevOps work items based on their ID.
          The tracking of items also allows the user to be able to see related child and parent items by expanding on a tracked node. These include Test Suites, Pull Requests, Epics, Features, etc.
          <br/>
          Tracked items are persisted and synced across your profiles.<br/>
          <br/>          
          Developed in vanilla js and styled with Tailwind CSS.
          <br/>
          Check out the extentsion for <a href="https://chrome.google.com/webstore/detail/azure-devops-tracker/pofdeeafbmacahfijoccmnkkakogieec" target="_blank">Chrome</a> or <a href="https://addons.mozilla.org/en-GB/firefox/addon/azure-devops-tracker/" target="_blank">Firefox</a>.
        </span>
        <br/>
        <div class="md:flex mt-4">
          <div>
            <a href="https://chrome.google.com/webstore/detail/azure-devops-tracker/pofdeeafbmacahfijoccmnkkakogieec" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://lh3.googleusercontent.com/xbDLqtDUdlpSpQz3r6nUXImuHZ9bboA1NHwsxcqkFCgAqY1X-vuUmwtzNS80o7zAVkdDdux-Ges8juGwwES467RHcZo=w640-h400-e365-rj-sc0x00ffffff"                 
                alt="Azure Devops Tracker"            
                :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
                class="cursor-pointer border-solid border-2 rounded-md md:border-4 w-auto" />
            </a>
          </div>
          <div class="md:ml-2">
            <a href="https://chrome.google.com/webstore/detail/azure-devops-tracker/pofdeeafbmacahfijoccmnkkakogieec" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://lh3.googleusercontent.com/OjDPfzT7msLc8NHvhYk4w-GPgbUGYRi8MzgXOyFYjspAlFJvKRF-vkOlJ-pW8-CyickckwyEfni-Qm4z0I_oyqJo=w640-h400-e365-rj-sc0x00ffffff"                 
                alt="Azure Devops Tracker 2"            
                :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
                class="cursor-pointer border-solid border-2 rounded-md md:border-4 w-auto" />
            </a>
          </div>
          <div class="md:ml-2">
            <a href="https://chrome.google.com/webstore/detail/azure-devops-tracker/pofdeeafbmacahfijoccmnkkakogieec" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://lh3.googleusercontent.com/yKHHhmuHinNP-pYPTwYat6eFFWtCtjyI9vAdOT23jKr59nhYdvUOlu2GvM8jQFSOLxS6uxDcK3F1FK2OUTVWNjk2=w640-h400-e365-rj-sc0x00ffffff"                 
                alt="Azure Devops Tracker Config"            
                :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
                class="cursor-pointer border-solid border-2 rounded-md md:border-4 w-auto" />
            </a>
          </div>
        </div>
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
            class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 w-auto" />
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
            class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 w-1/2" />
        </a>
      </div>
    </div>  
    <div class="mb-2">
      <div class="flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500" @click="slideElement('learning')">
          <span class="text-2xl mr-2">Learning Platform</span>
          <svg 
            :class="learningDown ? 'hidden' : ''"
            class="self-center"
            fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
            <path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
          </svg>
          <svg 
            class="self-center"
            :class="learningDown ? '' : 'hidden'"
            fill="none" width="24px" height="24px" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" view-box="0 14 24 24" stroke="currentColor">
            <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
          </svg>
      </div>
      <div id="learning" class="slide-up mt-2">
        <span class="md:text-base">
          Created using React with Node Express on the backend talking to a MySQL server.              
          <br />A learning platform designed to integrate with Google Suite where events can be created and managed. 
          <br />Functionality includes:
          <li>Users can express interest in different learning/induction sessions</li>
          <li>Presenters can manage their sessions, including the ability to invitie or remove parcipants</li>
          <li>Users can request training for any inductions</li>
          <li>Users can sign up to notification emails when new sessions become available</li>
        </span>
        <br/>
        <a href="../assets/images/learning1.png" target="_blank" rel="noopener noreferrer">
          <img 
            src="../assets/images/learning1.png"
            alt="Learning Screenshot"
            :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
            class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 w-1/2" />
        </a>
        <a href="../assets/images/learning2.png" target="_blank" rel="noopener noreferrer">
          <img 
            src="../assets/images/learning2.png"                
            alt="Learning Details Screenshot"
            :class="this.$store.state.theme === 'Dark' ? 'border-gray-300' : 'border-gray-900'"
            class="cursor-zoom-in border-solid border-2 rounded-md md:border-4 mt-4 w-1/2" />
        </a>
      </div>
    </div>      
    <div class="mb-6">
      <div>
        <a href="https://github.com/mojiwa/mojiwa.com" target="_blank" rel="noopener noreferrer">
          <span @click="slideElement('mojiwa')" class="w-auto text-2xl mb-8 cursor-pointer hover:text-teal-600 transition-colors ease-in-out duration-500">
            This site <br/>(opens on GitHub)
          </span>
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
      learningDown: false,
      azureDown: false,
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
      if (elementId === 'learning') {
        this.learningDown = !this.learningDown;
      }
      if (elementId === 'azure') {
        this.azureDown = !this.azureDown;
      }
    },
  }
}
</script>

<style>

</style>