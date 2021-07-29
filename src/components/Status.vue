<template>
  <div>
      <div v-if="!finished" class="bg-gray-100 h-4 w-48 rounded-md" />
      <div v-else class="flex items-center space-x-2 text-gray-800 dark:text-white">
          <div :class="`h-3 w-3 rounded-full flex-shrink-0 ${discordStatusClass}`" />
          <p v-html="discordStatusText"></p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            finished: false,
            lanyard: {},
            socket: null,
        }
    },
    computed: {
        discordStatusClass() {
            if(this.lanyard.discord_status === "online" || this.lanyard.discord_status === "dnd") {
                return "bg-green-400"
            } else {
                return "bg-gray-300"
            }
        },
        discordStatusText() {
            const lanyard = this.lanyard;
            let string = "";

            // Add Discord Status
            if(lanyard.discord_status === "online" || lanyard.discord_status === "dnd") {
                string += "Online"
            } else {
                string += "Offline"
            }

            // Add presence based info
            if(lanyard.discord_status === "online" || lanyard.discord_status === "dnd") {
                /*
                const filtered = lanyard.activities.filter((activity) => activity.type !== 4).pop() || {}
                if(filtered.name === "YouTube Music" && filtered.state && filtered.details && (filtered.assets.small_text === "Playing back" || filtered.assets.small_text === "Playlist on loop" || filtered.assets.small_text === "On loop")) {
                    const note = '<svg style="width:20px;height:20px" class="inline-block" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" /></svg>'
                    string += ` | ${note} Listening to <b>${filtered.details}</b> by <b>${filtered.state.split(" - ")[0]}</b>`
                } else if(filtered.name === "Stack Overflow") {
                    const logo = '<svg style="width:20px;height:20px" class="inline-block viewBox="0 0 24 24"><path fill="currentColor" d="M17.36,20.2V14.82H19.15V22H3V14.82H4.8V20.2H17.36M6.77,14.32L7.14,12.56L15.93,14.41L15.56,16.17L6.77,14.32M7.93,10.11L8.69,8.5L16.83,12.28L16.07,13.9L7.93,10.11M10.19,6.12L11.34,4.74L18.24,10.5L17.09,11.87L10.19,6.12M14.64,1.87L20,9.08L18.56,10.15L13.2,2.94L14.64,1.87M6.59,18.41V16.61H15.57V18.41H6.59Z" /></svg>'
                    string += ` | ${logo} Struggling with code. Browing Stack Overflow...`
                }
                */
               string += " | Want to see what music I'm listening to? Click <a href='https://listening.crugg.de' target='__blank' style='text-decoration: underline;'>here</a>!";
            }

            return string;
        }
    },
    /*
        Lanyard Implementation taken from eggsy.xyz, licensed under MIT License
        https://github.com/eggsy/website
    */
    mounted() {
        this.socket = new WebSocket("wss://api.lanyard.rest/socket")
        this.socket.addEventListener("open", () => {
            this.socket.send(
                JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_id: "228965621478588416",
                    },
                })
            )
            setInterval(() => {
                this.socket.send(
                    JSON.stringify({
                        op: 3,
                    })
                )
            }, 30000)
        })
        this.socket.addEventListener("message", ({
            data
        }) => {
            const {
                t: type,
                d: status
            } = JSON.parse(data)
            if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
                this.lanyard = status || {}
            this.finished = true
        })
    },
}
</script>

<style>

</style>