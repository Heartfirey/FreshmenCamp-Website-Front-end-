<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-6">

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
      </div>
    </div>
    <div class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">JXNU Programming Summer Camp 2022</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to build a solid programming foundation</p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>

        <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div v-for="feature in features" :key="feature.name" class="relative">
                <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
                </dd>
            </div>
            </dl>
        </div>
        </div>
    </div>
    <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">训练营-课程计划</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">以下为训练营期间具体的课程安排(仅供参考)</p>
    </div>
    <div class="max-w-7xl flex py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 mx-auto sm:auto-cols-max">
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                    2022.8.21-2022.8.23
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=SwitchHorizontalIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">C编程基础之输入输出</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-yellow-100 text-yellow-600 font-medium text-xs">
                    2022.8.23-2022.8.24
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=VariableIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">C编程基础之变量定义</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-orange-100 text-orange-600 font-medium text-xs">
                    2022.8.23-2022.8.24
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=ViewGridAddIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">C编程基础之算术表达式</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-blue-100 text-blue-600 font-medium text-xs">
                    2022.8.23-2022.8.24
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=ChipIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">C编程基础之逻辑表达式</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-purple-100 text-purple-600 font-medium text-xs">
                    2022.8.23-2022.8.24
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=RefreshIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">C编程基础之循环控制</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
            <a class="relative block p-8 border border-gray-20 shadow-xl rounded-xl" href="">
                <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-red-100 text-red-600 font-medium text-xs">
                    2022.8.23-2022.8.24
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">
                    <div class="w-8 h-8 sm:w-10 sm:h-10">
                        <component :is=DocumentReportIcon class="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                    </div>
                    <h5 class="mt-4 text-xl font-bold text-gray-900">暑期程序设计集训营-测试赛</h5>
                    <p class="mt-2 text-sm sm:block">本部分共包含视频课程以及，10道题目，并配有相应题解。主要针对C语言基本输入输出进行讲解和练习。</p>
                </div>
            </a>
        </div>
        
    </div>
    <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">FAQ</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">以下为有关问题的解答</p>
    </div>
        <div class="max-w-6xl space-y-4 mx-auto py-12">
        <details class="group" open>
            <summary
            class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-red-50"
            >
            <h5 class="font-medium text-gray-900">Q：报名训练营需要收费嘛？</h5>

            <svg
                class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p class="px-4 mt-4 leading-relaxed text-gray-700">
            A：不收取任何费用。新生程序设计训练营由江西师范大学计算机信息工程学院老师和学生社团共同组织举行，为非盈利型课题，不收取任何有关费用。
            任何以本训练营名义收取费用的均非官方渠道，请注意辨别！
            </p>
        </details>

        <details class="group">
            <summary
            class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
            >
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <svg
                class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </summary>

            <p class="px-4 mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>
    </div>


  </div>


    <FooterComponent/>
</template>

<script setup>
    import FooterComponent from '@/components/footer.vue'
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { DocumentReportIcon, RefreshIcon, ChipIcon, ViewGridAddIcon, VariableIcon, SwitchHorizontalIcon, MenuIcon, XIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

    const features = [
    {
        name: 'Online Judge',
        description:
        '利用JXNUOJ提供的在线评测服务进行练习，并获得实时评测结果',
        icon: GlobeAltIcon,
    },
    {
        name: 'Title2',
        description:
        'description #2',
        icon: ScaleIcon,
    },
    {
        name: 'Title3',
        description:
        'description #3',
        icon: LightningBoltIcon,
    },
    {
        name: 'Title4',
        description:
        'description #4',
        icon: AnnotationIcon,
    },
    ]

    const navigation = [
    { name: '了解详情', href: '#' },
    { name: '课程安排', href: '#' },
    { name: '报名咨询', href: '#' },
    { name: 'About ACS', href: '#' },
    ]
</script>


