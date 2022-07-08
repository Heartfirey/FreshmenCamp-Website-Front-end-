<template>
  <div v-show="Banner" class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> 想要加入新生程序设计训练营？ </span>
            <span class="hidden md:inline">想要加入新生程序设计训练营？立即报名课程！</span>
          </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="/register" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">Join in the Course</a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button @click="CloseBanner" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div> 
  <router-view></router-view>

</template>

<script setup>
    import {SpeakerphoneIcon, XIcon} from '@heroicons/vue/outline'
</script>

<script>
//import MainPage from './MainPage.vue'

export default {
  name: 'app',
  components: {
  
  },
  data() {
    return{
        Banner: true,

    }
    
  },
  methods: {
    CloseBanner: function(){
        this.Banner=false;
    }
  }
}
</script>


