<template>
    <div class="max-w-5xl px-4 py-6 mx-auto">
    <section class="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <img src="@/assets/acad.png" alt="" class="mx-auto w-60 mb-4 pb-8"/>
        <div class="px-4 pb-10 sm:px-4 md:px-4">
            <h2 class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">相关程序设计系列赛事简介</h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">如果你对算法竞赛十分感兴趣，请不要错过这些比赛哦~</p>
        </div>
        
    </section>
    <section class="p-8 bg-gray-100 rounded-lg">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
            <img src="@/assets/ICPC.jpg" alt=""  class="object-cover rounded-lg"/>
            </div>

            <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
            <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"><component :is=AcademicCapIcon class="mt-2 w-6 h-6 sm:w-6 sm:h-6 mx-auto" /></span>
            </div>
        </div>

        <blockquote class="sm:col-span-2">
            <p class="text-2xl font-bold sm:text-3xl"> ICPC 国际大学生程序设计竞赛 </p>
            <p class="text-sm mt-2 text-gray-600 font-medium sm:text-base"> 国际大学生程序设计竞赛（英文全称：International Collegiate Programming Contest（简称ICPC））是由国际计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。经过近40年的发展，ACM国际大学生程序设计竞赛已经发展成为全球最具影响力的大学生程序设计竞赛，赛事由AWS、华为和Jetbrains赞助，在北京大学设有ICPC北京总部，用于组织东亚区域赛。 </p>
            <cite class="inline-flex items-center mt-8 not-italic">
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-yellow-50 text-yellow-600 " href="https://icpc.global">
            了解更多<span class="sr-only"></span>
            <svg class="overflow-visible ml-3 text-yellow-300 group-hover:text-yellow-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
            </a>
            <span class="hidden ml-4 w-6 h-px bg-gray-400 sm:inline-block"></span>
            <p class="hidden text-sm text-gray-500 uppercase sm:ml-3 sm:inline-block">
                <strong>icpc.global</strong> 国际大学生程序设计竞赛
            </p>
            </cite>
        </blockquote>
        </div>
    </section>
    </div>
    <div class="max-w-5xl px-4 py-6 mx-auto">
    <section class="p-8 bg-gray-100 rounded-lg">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
            <img src="@/assets/CCPC.png" alt=""  class="flex w-full object-cover rounded-lg"/>
            </div>

            <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
            <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"><component :is=BadgeCheckIcon class="mt-2 w-6 h-6 sm:w-6 sm:h-6 mx-auto" /></span>
            </div>
        </div>

        <blockquote class="sm:col-span-2">
            <p class="text-2xl font-bold sm:text-3xl"> CCPC 中国大学生程序设计竞赛 </p>
            <p class="text-sm mt-2 text-gray-600 font-medium sm:text-base"> 中国大学生程序设计竞赛（China Collegiate Programming Contest，简称CCPC）是由教育部高等学校计算机类专业教学指导委员会主办的面向全国高校大学生的年度学科竞赛，旨在激发学生学习计算机领域专业知识与技能的兴趣，鼓励学生主动灵活地运用计算机知识和技能解决实际问题，有效提升算法设计、逻辑推理、数学建模、编程实现和计算机系统能力，培养团队合作意识、挑战精神和创新能力。 </p>
            <cite class="inline-flex items-center mt-8 not-italic">
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-red-50 text-red-600 " href="https://ccpc.io">
            了解更多<span class="sr-only"></span>
            <svg class="overflow-visible ml-3 text-red-300 group-hover:text-red-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
            </a>
            <span class="hidden ml-4 w-6 h-px bg-gray-400 sm:inline-block"></span>
            <p class="hidden text-sm text-gray-500 uppercase sm:ml-3 sm:inline-block">
                <strong>ccpc.io</strong> 中国大学生程序设计竞赛
            </p>
            </cite>
        </blockquote>
        </div>
    </section>
    </div>
    <div class="max-w-5xl px-4 py-6 mx-auto">
    <section class="p-8 bg-gray-100 rounded-lg">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
            <img src="@/assets/gplt.png" alt=""  class="flex w-full object-cover rounded-lg"/>
            </div>

            <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
            <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"><component :is=BadgeCheckIcon class="mt-2 w-6 h-6 sm:w-6 sm:h-6 mx-auto" /></span>
            </div>
        </div>

        <blockquote class="sm:col-span-2">
            <p class="text-2xl font-bold sm:text-3xl"> GPLT-CCCC 团体程序设计天梯赛  </p>
            <p class="text-sm mt-2 text-gray-600 font-medium sm:text-base"> 团体程序设计天梯赛是中国高校计算机大赛的竞赛版块之一，赛旨在提升学生计算机问题求解水平，增强学生程序设计能力，培养团队合作精神，提高大学生的综合素质，同时丰富校园学术气氛，促进校际交流，提高全国高校的程序设计教学水平。比赛重点考查参赛队伍的基础程序设计能力、数据结构与算法应用能力，并通过团体成绩体现高校在程序设计教学方面的整体水平。竞赛题目均为在线编程题，由搭建在网易服务器上的PAT在线裁判系统自动评判。难度分3个梯级：基础级、进阶级、登顶级。以个人独立竞技、团体计分的方式进行排名。 </p>
            
            <cite class="inline-flex items-center mt-8 not-italic">
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-green-50 text-green-600 " href="https://gplt.patest.cn">
            了解更多<span class="sr-only"></span>
            <svg class="overflow-visible ml-3 text-green-300 group-hover:text-green-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
            </a>
            <span class="hidden ml-4 w-6 h-px bg-gray-400 sm:inline-block"></span>
            <p class="hidden text-sm text-gray-500 uppercase sm:ml-3 sm:inline-block">
                <strong>gplt.patest.cn</strong> 团体程序设计天梯赛
            </p>
            </cite>
        </blockquote>
        </div>
    </section>
    </div>
    <div class="max-w-5xl px-4 py-6 mx-auto">
    <section class="p-8 bg-gray-100 rounded-lg">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
            <img src="@/assets/LANQIAO.png" alt=""  class="flex w-full object-cover rounded-lg"/>
            </div>

            <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
            <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"><component :is=BadgeCheckIcon class="mt-2 w-6 h-6 sm:w-6 sm:h-6 mx-auto" /></span>
            </div>
        </div>

        <blockquote class="sm:col-span-2">
            <p class="text-2xl font-bold sm:text-3xl"> LAN QIAO 蓝桥杯  </p>
            <p class="text-sm mt-2 text-gray-600 font-medium sm:text-base"> 蓝桥杯全国软件和信息技术专业人才大赛是由中华人民共和国工业和信息化部人才交流中心主办，国信蓝桥教育科技（北京）股份有限公司承办的计算机类学科竞赛。截至2022年7月，蓝桥杯全国软件和信息技术专业人才大赛已举办13届。 </p>
            
            <cite class="inline-flex items-center mt-8 not-italic">
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-blue-50 text-blue-600 " href="https://dasai.lanqiao.cn">
            了解更多<span class="sr-only"></span>
            <svg class="overflow-visible ml-3 text-blue-300 group-hover:text-blue-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
            </a>
            <span class="hidden ml-4 w-6 h-px bg-gray-400 sm:inline-block"></span>
            <p class="hidden text-sm text-gray-500 uppercase sm:ml-3 sm:inline-block">
                <strong>dasai.lanqiao.cn</strong> 蓝桥杯
            </p>
            </cite>
        </blockquote>
        </div>
    </section>
    </div>

</template>

<script setup>
import { AcademicCapIcon, BadgeCheckIcon } from '@heroicons/vue/outline';

</script>




