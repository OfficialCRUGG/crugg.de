<template>
  <div class="clicker dynamic-padding lg:flex mt-5">
    <div class="h-full w-full lg:w-4/12 text-center">
      <Modal noButton="No, keep my data!" yesButton="Yes, wipe all data!" v-if="deleteDataModal" @no="deleteDataModal = false" @yes="deleteData()">
        <h1 class="font-bold text-2xl">Do you really want to reset all your data?</h1>
        <p class="text-lg">This action will not be revertable. <s>We recommend using the Backup Feature first!</s> A backup system will be added soon!</p>
      </Modal>
      <div v-if="!this.saveGame.saveVer || this.saveGame.saveVer < this.currentVer" class="bg-red-200 border-l-4 border-red-500 dark:text-black mx-5 mb-5 py-1 px-3">
        <p>Hey! Your savestate is outdated. It is still running on v{{ this.saveGame.saveVer || 0 }}. Please delete your data to play v{{ currentVer }}!</p>
      </div>
      <h2 class="text-3xl font-semibold">{{ saveGame.lines }} lines of code</h2>
      <p class="text-xl">{{ saveGame.clickLines }} lines per click</p>
      <p class="text-xl">{{ cps }} clicks per second</p>
      <p class="text-xl">{{ saveGame.autoClicks }} automatic clicks per second</p>
      <div class="bg-gray-200 dark:bg-gray-900 m-5 py-8 rounded-md cursor-pointer select-none font-bold" @click="handleClick()">
          Write a line of code!
      </div>
      <div class="bg-gray-200 dark:bg-gray-900 m-5 py-2 rounded-md cursor-pointer select-none" @click="deleteDataModal = true">
          Wipe data
      </div>
      <p>Game Version: v1.1.0 | Save Version: v{{ this.currentVer }}</p>
      <p class="mt-3">
        <b>Planned features:</b><br>
        - Backups<br>
        - Modding
      </p>
    </div>
    <div class="h-full w-full lg:w-4/12 pr-2">
      <div v-for="job in saveGame.employees" :key="job.id">
        <div class="bg-gray-200 w-full px-4 py-2 flex justify-between items-center mb-4 rounded-md dark:bg-gray-900" v-if="job.unlocked">
          <h3 class="font-semibold text-2xl">{{ job.name }} ({{ job.amount }})</h3>
          <div :class="`bg-white px-2 py-1 rounded-md select-none cursor-pointer dark:bg-gray-800 ${ saveGame.lines >= job.cost ? 'opacity-100' : 'opacity-50' }`" @click="employ(job.id)">Employ for {{ job.cost }} lines</div>
        </div>
      </div>
    </div>
    <div class="h-full w-full lg:w-4/12 pl-2">
      <div v-for="upgrade in saveGame.upgrades" :key="upgrade.id">
        <div class="bg-gray-200 w-full px-4 py-2 flex justify-between items-center mb-4 rounded-md dark:bg-gray-900" v-if="upgrade.unlocked">
          <h3 class="font-semibold text-2xl">{{ upgrade.name }} ({{ upgrade.amount }})</h3>
          <div :class="`bg-white px-2 py-1 rounded-md select-none cursor-pointer dark:bg-gray-800 ${ saveGame.lines >= upgrade.cost ? 'opacity-100' : 'opacity-50' }`" @click="addUpgrade(upgrade.id)">Upgrade for {{ upgrade.cost }} lines</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      cps: 0,
      currentVer: 3,
      deleteDataModal: false,
      saveGame: {
        saveVer: 3,
        lines: 0,
        clickLines: 1,
        autoClicks: 0,
        employees: [
          {
            id: "student",
            name: "Student",
            cost: 200,
            unlock: 10,
            unlocked: false,
            amount: 0,
            clicks: 1,
          },
          {
            id: "backend",
            name: "Backend Dev",
            cost: 400,
            unlock: 250,
            unlocked: false,
            amount: 0,
            clicks: 3,
          },
          {
            id: "frontend",
            name: "Frontend Dev",
            cost: 700,
            unlock: 500,
            unlocked: false,
            amount: 0,
            clicks: 5,
          },
          {
            id: "full",
            name: "Fullstack Dev",
            cost: 6000,
            unlock: 1000,
            unlocked: false,
            amount: 0,
            clicks: 50,
          },
          {
            id: "manager",
            name: "Manager",
            cost: 100000,
            unlock: 1200,
            unlocked: false,
            amount: 0,
            clicks: 200,
          },
          {
            id: "elon",
            name: "Elon",
            cost: 1000000,
            unlock: 8000,
            unlocked: false,
            amount: 0,
            clicks: 5000,
          }
        ],
        upgrades: [
          {
            id: "cheap",
            name: "cheap keyboard",
            cost: 200,
            unlock: 120,
            unlocked: false,
            amount: 0,
            clicks: 1,
          },
          {
            id: "logitech",
            name: "Logitech keyboard",
            cost: 400,
            unlock: 250,
            unlocked: false,
            amount: 0,
            clicks: 2,
          },
          {
            id: "roccat",
            name: "Roccat keyboard",
            cost: 700,
            unlock: 500,
            unlocked: false,
            amount: 0,
            clicks: 3,
          },
          {
            id: "razer",
            name: "Razer keyboard",
            cost: 1000,
            unlock: 750,
            unlocked: false,
            amount: 0,
            clicks: 5,
          },
          {
            id: "xiaomi",
            name: "Xiaomi keyboard",
            cost: 5000,
            unlock: 4000,
            unlocked: false,
            amount: 0,
            clicks: 10,
          },
          {
            id: "mars",
            name: "AI Mars rover",
            cost: 69000000,
            unlock: 8000,
            unlocked: false,
            amount: 0,
            clicks: 9000,
          },
          {
            id: "marsdel",
            name: "AI Mars rover DELUXE",
            cost: 690000000,
            unlock: 10000,
            unlocked: false,
            amount: 0,
            clicks: 50000,
          }
        ]
      }
    }
  },
  methods: {
    handleClick() {
      this.saveGame.lines += this.saveGame.clickLines;
      this.saveGame.employees.forEach((job) => {
        if(this.saveGame.lines >= job.unlock) {
          job.unlocked = true;
        }
      });
      this.saveGame.upgrades.forEach((upgrade) => {
        if(this.saveGame.lines >= upgrade.unlock) {
          upgrade.unlocked = true;
        }
      });
      this.cps++;
      setTimeout(() => {
        this.cps--;
      }, 1000);
    },
    addUpgrade(upgradeId) {
      this.saveGame.upgrades.forEach((upgrade) => {
        if(upgrade.id === upgradeId) {
          if(this.saveGame.lines >= upgrade.cost) {
            this.saveGame.clickLines += upgrade.clicks;
            upgrade.amount += 1;
            this.saveGame.lines -= upgrade.cost;
          }
        }
      });
    },
    employ(jobId) {
      this.saveGame.employees.forEach((job) => {
        if(job.id === jobId) {
          if(this.saveGame.lines >= job.cost) {
            this.saveGame.autoClicks += job.clicks;
            job.amount += 1;
            this.saveGame.lines -= job.cost;
          }
        }
      });
    },
    deleteData() {
      localStorage.removeItem('crugg.de_webdev-clicker_savegame');
      document.location.reload();
    }
  },
  mounted() {
    if(localStorage.getItem("crugg.de_webdev-clicker_savegame")) {
      this.saveGame = JSON.parse(localStorage.getItem("crugg.de_webdev-clicker_savegame"));
    }
    setInterval(() => {
      this.saveGame.lines += this.saveGame.autoClicks;
      this.saveGame.employees.forEach((job) => {
        if(this.saveGame.lines >= job.unlock) {
          job.unlocked = true;
        }
      });
      this.saveGame.upgrades.forEach((upgrade) => {
        if(this.saveGame.lines >= upgrade.unlock) {
          upgrade.unlocked = true;
        }
      });
    }, 1000);
  },
  watch: {
    saveGame: {
      deep: true,
      handler() {
        localStorage.setItem("crugg.de_webdev-clicker_savegame", JSON.stringify(this.saveGame));
      }
    }
  }
}
</script>


<style scoped lang="sass">
a
  text-decoration: underline
</style>