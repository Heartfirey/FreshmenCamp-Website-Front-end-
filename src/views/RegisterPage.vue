<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-2 bg-white sm:pb-12 md:pb-12 lg:max-w-2xl lg:w-full lg:pb-22 xl:pb-6">

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
                <a href="/camp/tools" class="font-medium text-indigo-600 hover:text-indigo-500">软件资源</a>
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
                <a href="/camp/tools" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> 软件资源 </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
    <!-- 分割线 -->
  


  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-screen-xl mx-auto">
            <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-2xl">JXNU Programming Summer Camp 2022</h1>
            <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl mt-2">江西师范大学新生暑期程序设计训练营-2022</h1>
            <p class="mt-4 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">课程注册(注册入口)</p>
            <p class="max-w-screen-xl mx-auto mt-6 text-center text-pink-600">
            *请在阅读相关说明后进行注册(详见"课程安排"、"报名咨询")
            </p>
            <p class="max-w-screen-xl mx-auto mt-4 text-center text-gray-500">
            本训练营由江西师范大学计算机信息工程学院学生社团(计算机科学协会)发起，面向全体2022级新生开展培训。
            </p>

        <div>
        <div class="mt-8 md:grid md:grid-cols-3 md:gap-6">
        
        </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
    </div>

    <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-600">填写个人信息，以用于开通JXNU Online Judge账户及注册课程(仅允许通过验证的同学注册)</p>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                    <label for="school" class="block text-sm font-medium text-gray-700">学院选择</label>
                    <select v-on:change="schoolSelect($event, option)" id="school" v-model="schoolChange" name="school" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>计算机信息工程学院</option>
                        <option>上饶数字产业学院</option>
                        <option>附加注册入口</option>
                    </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <label for="class" class="block text-sm font-medium text-gray-700">班级选择</label>
                    <select id="class" v-on:change="classSelect($event, option)" v-model="classChange" name="classSelect" autocomplete="class-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option v-for="(item, index) in info" v-bind:key="index" :value="item.className">{{ item.className }}</option>
                    </select>
                    </div>


                    <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">姓名</label>
                    <input type="text" ref="studentName" name="first-name" id="first-name" autocomplete="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">学号</label>
                    <input type="text" ref="studentID" name="last-name" id="last-name" autocomplete="stduentId" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-5">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <p class="mt-2 mb-2 text-sm text-red-400">* 此邮件地址将用作OnlineJudge在线评测系统账号</p>
                    <input v-on:change="emailChangeWatch($event, option)" type="text" v-model="emailChange" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    <p class="mt-2 text-sm" id="verify_status">{{ emailVerify }}</p>
                    
                    </div>
                            
                </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-5 px-4 py-3 bg-gray-50 text-right sm:px-6">
                <label class="col-span-4 sm:grid-cols-4 block max-w-xl mt-2 text-sm text-left" id="form_completed">{{ completedStatus }}</label>
                <button @click="submitInfo" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">验证身份/注册</button>
                </div>
            </div>

        </div>
        </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
    </div>

    <div v-show="regResultCard" class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Registration Results</h3>
            <p class="mt-1 text-sm text-gray-600">此处返回您的课程通行证注册结果，请仔细核对。如有错误请联系管理员修改。</p>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
 
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=LibraryIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultSchoolName }}</h5>
                        <label class="text-xs text-gray-500">注册学院</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=UserGroupIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultClassName }}</h5>
                        <label class="text-xs text-gray-500">注册班级</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=UserCircleIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultUserName }}</h5>
                        <label class="text-xs text-gray-500">注册用户名</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=IdentificationIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultStuID }}</h5>
                        <label class="text-xs text-gray-500">注册学号</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=MailIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultEmail }}</h5>
                        <label class="text-xs text-gray-500">注册邮箱/Online Judge账号</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                <div class="relative grid grid-cols-1">
                    <label class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">

                      <div class="flex items-center gap-1">
                        <component :is=KeyIcon class="inline-block w-8 h-8 sm:w-8 sm:h-8" aria-hidden="true" />

                        <div class="ml-3">
                        <h5>{{ ResultPasswd }}</h5>
                        <label class="text-xs text-gray-500">Online Judge 用户密码</label>
                        <div class="flow-root">
                            
                        </div>
                        </div>
                    </div>
                    </label>

                    <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  
                </div>
                
                </div>
                </div>
                <div class="flex justify-center px-4 py-3 bg-green-400 sm:px-6">
                <component :is=BadgeCheckIcon class="inline-flex  w-8 h-8 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                <p class="inline-flex ml-2 py-1 text-white">注册成功，账号已激活！</p>
                </div>
                

            </div>

        </div>
        </div>
    </div>

    <WarningFee></WarningFee>
    
    </div></div></div>
    
    

  <FooterComponent/>
</template>

<script setup>
    import WarningFee from "@/components/warning.vue"
    import FooterComponent from "@/components/footer.vue"
    //import {watch} from "vue"
    import axios from "axios"
    //import BannerComponent from "@/components/banner.vue"
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { MenuIcon, XIcon, BadgeCheckIcon, LibraryIcon, UserGroupIcon, UserCircleIcon, IdentificationIcon, MailIcon, KeyIcon } from '@heroicons/vue/outline'
    const navigation = [
    { name: '了解详情', href: '/camp/main' },
    { name: '课程安排', href: '/camp/course' },
    { name: '报名咨询', href: '/camp/register' },
    { name: 'About ACS', href: '#' },
    ]
</script>

<script>
    axios.interceptors.request.use(config => {
        if (/get/i.test(config.method)) { //判断get请求
            config.params  =  config.params || {};
            config.params.t = Date.parse(new Date())/1000; //添加时间戳
        }
        return config;
    }, error => {
        return Promise.reject(error);
    })
    export default {
        name: 'RegisterPage',
        data () {
            return {
                schoolChange: '',
                classChange: '',
                emailChange: '',
                emailVerify: '',
                emailCorrect: false,
                regResultCard: false,
                info: []
            }
        },
        methods: {
            schoolSelect: async function(event){
                this.schoolChange = event.target.value
                let val = this.schoolChange
                await axios
                    .get("api/getClassBySchool?schoolName="+val)
                    .then((res) => {
                        this.info = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    });  
            },
            classSelect: async function(event){
                this.classChange = event.target.value
            },
            emailChangeWatch: function(event){
                this.emailChange = event.target.value
                var verify = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(!verify.test(this.emailChange)){
                    document.querySelector("#verify_status").className = "mt-2 text-sm text-red-400";
                    this.emailVerify = "邮箱格式不正确！";
                    this.emailCorrect = false;
                } else {
                    document.querySelector("#verify_status").className = "mt-2 text-sm text-green-400";
                    this.emailVerify = "邮箱格式正确！";
                    this.emailCorrect = true;
                }
            },
            submitInfo: async function(){
                let userFilledInfo = {
                    schoolName: this.schoolChange,
                    className: this.classChange,
                    studentName: this.$refs.studentName.value,
                    studentID: this.$refs.studentID.value,
                    email: this.emailChange,
                }
                var verify = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(!verify.test(userFilledInfo.email)){
                    document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-red-600"
                    this.completedStatus = "* 错误：邮箱地址不正确！";
                    this.$forceUpdate();
                    return;
                }
                for(let key in userFilledInfo){
                    if(userFilledInfo[key] == ''){
                        console.error("ERROR! Some item hasn't been filled");
                        document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-red-600"
                        this.completedStatus = "* 错误：请确保已经填写全部的信息！";
                        this.$forceUpdate();
                        return;
                    }
                }
                var email_available = false;
                await axios
                .get("api/checkEmailIsRegistered?email=" + userFilledInfo.email)
                .then((res) => {
                    if(res.data.status == false){
                        email_available = true;
                    }
                    else{
                        email_available = false;
                    }

                }).catch((err) => { console.log(err);});

                if(email_available){
                    document.querySelector("#verify_status").className = "mt-2 text-sm text-green-400"
                    this.emailVerify = "邮箱格式正确，且可用！"
                    this.$forceUpdate();
                }
                else{
                    document.querySelector("#verify_status").className = "mt-2 text-sm text-red-400"
                    this.emailVerify = "邮箱已被注册，请勿重复注册！如果需要注销该账户，请联系管理员。"
                    this.$forceUpdate();
                    return;
                }

                var studentInfoOnServer = null
                await axios
                .get("api/getStudentBy?studentID=" + userFilledInfo.studentID)
                .then((res) => { studentInfoOnServer = res.data })
                .catch((err) => { console.log(err); });

                if(studentInfoOnServer.length == 0){
                    document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-red-600"
                    this.completedStatus = "* 错误：未查询到该学号所对应的用户信息！请仔细检查信息后重试或联系管理员";
                    this.$forceUpdate();
                    return;
                }
                if(studentInfoOnServer[0].studentName != userFilledInfo.studentName || studentInfoOnServer[0].studentClass != userFilledInfo.className){
                    document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-red-600"
                    this.completedStatus = "* 错误：个人信息核对失败！请仔细检查信息后重试或联系管理员";
                    this.$forceUpdate();
                    return;
                }
                document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-green-600"
                this.completedStatus = "√ 认证成功，正在注册...";
                this.$forceUpdate();
                
                var registerStatus = false;
                await axios
                .get("api/registerUser", {
                    params: {  
                        username: studentInfoOnServer[0].studentName,
                        stuid: studentInfoOnServer[0].studentID,
                        email: userFilledInfo.email,
                        serial: studentInfoOnServer[0].studentSerial
                    }
                })
                .then((res) => { 
                    console.log(res);
                    registerStatus = res.data.serverStatus
                })
                .catch((err) => { console.log(err); });

                if(registerStatus == false){
                    document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-green-600"
                    this.completedStatus = "X 注册失败！请联系管理员";
                    this.$forceUpdate();
                    return;
                }
                else {
                    document.querySelector("#form_completed").className = "col-span-4 mb-4 sm:mb-2 block max-w-xl mt-2 text-sm text-left text-green-600"
                    this.completedStatus = "√ 注册成功！";
                    this.ResultSchoolName = userFilledInfo.schoolName;
                    this.ResultClassName = userFilledInfo.className;
                    this.ResultUserName = userFilledInfo.className + "-" + userFilledInfo.studentName;
                    this.ResultStuID = userFilledInfo.studentID;
                    this.ResultEmail = userFilledInfo.email;
                    this.ResultPasswd = "JxnuCie2022+身份证号后6位";
                    this.regResultCard = true;
                    this.$forceUpdate();
            }
        }
    }
</script>


