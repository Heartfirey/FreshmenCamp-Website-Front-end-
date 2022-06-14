<!-- This example requires Tailwind CSS v2.0+ -->
<template>





  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img alt="Workflow" class="h-8 w-auto sm:h-10" src="@/assets/logo.png" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="@/assets/logo.png" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">江西师范大学计算机信息工程学院</span>
              {{ ' ' }}
              <span class="block text-indigo-600 xl:inline">新生程序设计训练营</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">巴拉巴拉</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/workroom.jpg" alt="" />
    </div>
  </div>

  <div id="Introduction" style="margin-top: 176px;">
  <IntroductionCard></IntroductionCard>
  </div>


  <footer class="bg-gray-900">
  <div
    class="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24"
  >
    <div class="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
      <a
        class="inline-block p-2 text-teal-300 transition bg-gray-700 rounded-full sm:p-3 lg:p-4 hover:bg-gray-600"
        href="#MainContent"
      >
        <span class="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-300 lg:justify-start">
        <img alt="Workflow" class="h-8 w-auto sm:h-16" src="@/assets/logo.png" />
        </div>

        <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 lg:text-left">
            Powered by Association of Computer Science <br/> More details to see, please join the QQ group: 114514
        </p>
      </div>

      <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
        <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

        <ul
          class="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12"
        >
          <li>
            <a class="text-white transition hover:text-white/75" href="/"> About </a>
          </li>

          <li>
            <a class="text-white transition hover:text-white/75" href="/"> Services </a>
          </li>

          <li>
            <a class="text-white transition hover:text-white/75" href="https://acs.jxnu.edu.cn"> OnlineJudge </a>
          </li>

          <li>
            <a class="text-white transition hover:text-white/75" href="https://acs.jxnu.edu.cn/acsblog/"> Blog </a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="mt-12 text-sm text-center text-gray-400 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: '了解详情', href: '#' },
  { name: '课程安排', href: '#' },
  { name: '报名咨询', href: '#' },
  { name: 'About ACS', href: '#' },
]
</script>

<script>
import IntroductionCard from '@/components/IntroductionCard.vue'

export default {
  name: 'MainPage',
  components: {
    IntroductionCard
  }
}

</script>



<!-- <style>
    @keyframes leftMove{
        0% {  margin-left: -5px; }

        20% { margin-left: -500px; }

        40% { margin-left: -1000px; }

        60% { margin-left: -1500px; }

        80% { margin-left: -2000px; }

        100% { margin-left: -2500px; }
    }

    ul {
        margin: 0px;
        padding: 0px;
        overflow: hidden;
        position: relative;
        list-style: none;
        width: 6711px;
        left: 0px;
        animation: leftMove 50s linear infinite;
    }


    ul:hover {
        cursor: pointer;
        animation-play-state: paused;
    }

</style> -->


