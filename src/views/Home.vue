<template>
  <div class="home">
    <section class="py-10 header">
      <div class="dynamic-padding flex flex-row space-x-10 items-center">
        <div class="flex-shrink-0">
          <img src="img/transparent_logo.png" alt="C" class="h-32 crugg-logo">
        </div>
        <div>
          <h1 class="font-bold text-5xl mb-2">Hey! <svg xmlns="http://www.w3.org/2000/svg" class="h-10 inline animate__animated animate__tada animate__delay-2s" viewBox="0 0 36 36"><path fill="#E0AA94" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#F7DECE" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g></svg></h1>
          <h2 class="font-semibold text-2xl mb-3">I'm Dennis, a {{ age }}-year-old developer, graphic designer and wannabe entrepreneur.</h2>
          <div class="md:flex space-x-5 items-center">
            <Status />
            <div id="shareButton" :class="`dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600 bg-white border-gray-200 hover:bg-gray-100 hover:border-gray-300 border px-3 py-1 rounded-md cursor-pointer ${!canShare ? 'invisible' : ''}`">Share this website!</div>
          </div>
        </div>
      </div>
    </section>
    <section class="dynamic-padding mt-20">
      <h1 class="font-bold text-4xl mb-5">Project / Companies</h1>
      <div class="lg:flex lg:space-x-6 space-y-6 lg:space-y-0 mb-6">
        <ProjectCard v-for="project in projects.primary" class="flex-grow" :key="project.id" :id="project.id" :title="project.title" :description="project.description" :url="project.url" :image="project.image" :position="project.position" />
      </div>
      <div class="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
        <ProjectCard v-for="project in projects.secondary" class="flex-grow" :key="project.id" :id="project.id" :title="project.title" :description="project.description" :url="project.url" :image="project.image" :position="project.position" />
      </div>
    </section>
    <section class="dynamic-padding mt-20">
      <h1 class="font-bold text-4xl mb-5">Technologies I use</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <TechnologyCard v-for="technology in technologies" class="flex-grow" :key="technology.id" :id="technology.id" :title="technology.name" :url="technology.url" />
      </div>
      <h1 class="font-bold text-4xl mt-8 mb-5">Programs I use</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <TechnologyCard v-for="program in programs" class="flex-grow" :key="program.id" :id="program.id" :title="program.name" :url="program.url" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
.header
  @apply bg-white
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23f6f6f6' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

.dark .header
  @apply bg-gray-800
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%231c1c1c' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
</style>

<script>
import Status from "../components/Status.vue";
import ProjectCard from "../components/ProjectCard.vue";
import TechnologyCard from "../components/TechnologyCard.vue";

export default {
  components: {
    Status,
    ProjectCard,
    TechnologyCard
  },
  data() {
    return {
      canShare: false,
      projects: {
        primary: [
          {
            id: "bm",
            title: "BlazingMedia",
            description: "Team of young, aspiring Developers trying to create innovative user experiences",
            url: "https://blzn.ga",
            image: "img/projects/blazingmedia.png",
            position: "Founder, Product Management, Marketing"
          },
          {
            id: "pdm",
            title: "PartydoosMedia / PDM DACH",
            description: "PartydoosMedia is a digital creative agency based in the Netherlands.",
            url: "https://partydoosmedia.com",
            image: "img/projects/partydoosmedia.png",
            position: "Brand Ambassador, Sales, Localization"
          },
          {
            id: "taiga",
            title: "taiga Bot",
            description: "Discord bot trying to be the only bot you need, offering everything you need in one.",
            url: "https://taigabot.net",
            image: "img/projects/taigabot.png",
            position: "Management, Development"
          }
        ],
        secondary: [
          {
            id: "statemc",
            title: "StateMC",
            description: "German roleplaying community inside Minecraft using game modifications",
            url: "https://wwww.statemc.de",
            image: false,
            position: "Webdesign, Development"
          },
          {
            id: "teega",
            title: "TEEGA Logistics",
            description: "Virtual trucking company for Euro Truck Simulator 2 & American Truck",
            url: "https://teegavtc.com",
            image: false,
            position: "Management, Development"
          },
          {
            id: "truckspace",
            title: "Truckspace Group",
            description: "Small team of developers creating products for trucking simulators.",
            url: "https://truckspace.group",
            image: false,
            position: "Quality Assurance, Beta Testing"
          }
        ]
      },
      technologies: [
        {
          id: "js",
          name: "JavaScript",
          url: "https://www.w3.org/standards/webdesign/script"
        },
        {
          id: "ts",
          name: "TypeScript",
          url: "https://www.typescriptlang.org/"
        },
        {
          id: "html",
          name: "HTML5",
          url: "https://www.w3.org/TR/html52/"
        },
        {
          id: "css",
          name: "CCS3",
          url: "https://www.w3.org/Style/CSS/Overview.en.html"
        },
        {
          id: "sass",
          name: "SASS/SCSS",
          url: "https://sass-lang.com/"
        },
        {
          id: "vue",
          name: "Vue",
          url: "https://vuejs.org/"
        },
        {
          id: "nuxt",
          name: "NuxtJS",
          url: "https://nuxtjs.org/"
        },
        {
          id: "php",
          name: "PHP",
          url: "https://www.php.net/"
        },
        {
          id: "laravel",
          name: "Laravel",
          url: "https://laravel.com/"
        },
        {
          id: "tailwind",
          name: "Tailwind",
          url: "https://tailwindcss.com/"
        },
        {
          id: "node",
          name: "NodeJS",
          url: "https://nodejs.org/"
        },
        {
          id: "java",
          name: "Java",
          url: "https://www.java.com/"
        }
      ],
      programs: [
        {
          id: "vscode",
          name: "Visual Studio Code",
          url: "https://code.visualstudio.com/"
        },
        {
          id: "intellij",
          name: "JetBrains IntelliJ IDEA",
          url: "https://www.jetbrains.com/idea/"
        },
        {
          id: "datagrip",
          name: "JetBrains DataGrip",
          url: "https://www.jetbrains.com/datagrip/"
        },
        {
          id: "youtrack",
          name: "JetBrains YouTrack",
          url: "https://www.jetbrains.com/youtrack/"
        },
        {
          id: "branch",
          name: "Branch",
          url: "https://www.branch.gg/"
        },
        {
          id: "github",
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          id: "figma",
          name: "Figma",
          url: "https://www.figma.com/"
        },
        {
          id: "trello",
          name: "Trello",
          url: "https://trello.com/"
        },
      ]
    }
  },
  computed: {
    age() {
      return (new Date(Date.now() - new Date("02/09/2006").getTime())).getUTCFullYear() - 1970;
    }
  },
  mounted() {
    document.querySelector("#shareButton").addEventListener("click", () => {
      navigator.share({ title: "CRUGG's Website", text: "Check out CRUGG's Website!", url: window.location.href });
    });
    
    if(navigator.share) {
      this.canShare = true;
      console.log(this.canShare);
    }
  }
}
</script>