<template>
  <div class="fixed h-screen w-screen top-0 left-0 bg-black z-50 bg-opacity-70 backdrop backdrop-blur-5 flex items-center justify-center">
    <div class="w-4/5 md:w-3/5 lg:w-2/5 h-1/4 md:h-1/5 lg:h-1/5 flex flex-col justify-between rounded-md bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-50">
      <div class="flex flex-col flex-grow justify-center p-2">
        <slot></slot>
      </div>
      <div class="flex flex-row border-t border-gray-200 dark:border-gray-800 rounded-b-md">
        <div class="rounded-bl-md flex-grow w-full font-semibold text-lg py-2 cursor-pointer" v-if="noButton" @click="$emit('no')">
          {{ noButton }}
        </div>
        <div class="border-l border-gray-200 dark:border-gray-800 rounded-br-md flex-grow w-full font-semibold text-lg py-2 bg-white dark:bg-black bg-opacity-20 dark:bg-opacity-10 py-2 cursor-pointer" v-if="yesButton" @click="$emit('yes')">
          {{ yesButton }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noButton: String,
    yesButton: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
