<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <BannerComponent />
    <div>
        <aside class="p-12 sm:p-12 lg:p-12">
            <div class="max-w-xl mx-auto text-center">
                <p class="text-sm font-medium text-gray-500"> Download Tools Here (IDE, Complier, Other Software) </p>
                <p class="mt-3 text-3xl font-bold sm:text-5xl"> 课程相关软件资源下载 </p>
                <p class="mt-6 text-sm font-medium text-gray-500"> 还未注册课程？点击下方按钮立即注册训练营课程！ </p>
                <div class="mt-5 sm:items-center sm:justify-center sm:flex">
                    <a href="/register"
                        class="block px-5 py-3 font-medium text-white bg-indigo-500 rounded-lg shadow-xl hover:bg-blue-600">
                        注册课程 </a>
                </div>
            </div>
        </aside>
    </div>
    <div class="max-w-7xl flex flex-col py-16 gap-8 mx-auto px-4 sm:px-6 lg:px-8">
        <a class="shadow mx-auto grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
            href="https://wwc.lanzouj.com/iEPkB073m6xc">
            <div class="grid place-items-center">
                <img class="inset-0 object-cover w-full" src="@/assets/edev.png" alt="" />
            </div>

            <div class="p-8 sm:col-span-2">
                <ul class="flex space-x-1">
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                        C/C++ </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full"> IDE
                    </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full"> With
                        Compiler </li>
                </ul>

                <h5 class="mt-4 font-bold">DEV-C++(Embarcadero Dev-C++) V6.3</h5>

                <p class="mt-2 text-sm text-gray-500">
                    Dev-C++（或者叫做 Dev-Cpp）是 Windows 环境下的一个轻量级 C/C++
                    集成开发环境（IDE）。它是一款自由软件，遵守GPL许可协议分发源代码。它集合了功能强大的源码编辑器、MingW64/TDM-GCC 编译器、GDB 调试器和 AStyle
                    格式整理器等众多自由软件，适合于在教学中供 C/C++语言初学者使用，也适合于非商业级普通开发者使用。
                    <br />原开发公司 Bloodshed 在2011年发布了 v4.9.9.2 后停止开发。后来，独立开发者 Orwelldevcpp 继续更新开发，2016年发布了最终版本
                    v5.11之后停止更新。国外开发者 FMXExpress 等人在 Embarcadero 公司支持下继续开发的 Embarcadero Dev-C++。
                </p>
                <div class="flex place-items-center">
                    <component :is=InformationCircleIcon class="mt-2 w-10 h-10 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        由于官方版在早期停止维护，本版本为由Embarcadero赞助开发的新版(V6.3)
                    </p>
                </div>
                <div class="flex place-items-center">
                    <component :is=CheckCircleIcon class="mt-2 w-7 h-7 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        我们提供的版本为包含MinGW_w64编译器版本的DEV_C++
                    </p>
                </div>
            </div>
        </a>
        <a class="shadow mx-auto grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
            href="https://www.fosshub.com/Code-Blocks.html?dwl=codeblocks-20.03mingw-setup.exe">
            <div class="grid place-items-center">
                <img class="inset-0 object-cover w-full" src="@/assets/codeblocks.png" alt="" />
            </div>

            <div class="p-8 sm:col-span-2">
                <ul class="flex space-x-1">
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                        C/C++ </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full"> IDE
                    </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full"> With
                        Compiler </li>
                </ul>

                <h5 class="mt-4 font-bold">Code::Blocks</h5>

                <p class="mt-2 text-sm text-gray-500">
                    Code::Blocks 是一款免费开源的 C/C++ IDE，支持 GCC、MSVC++等多种编译器，还可以导入 Dev-C++
                    的项目。Code::Blocks的优点是：跨平台，在Linux、Mac、Windows上都可以运行，且自身体积小，安装非常方便。
                </p>
                <div class="flex place-items-center">
                    <component :is=BeakerIcon class="mt-2 w-5 h-5 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        学院机房实验室环境支持 Code::Blocks IDE
                    </p>
                </div>
                <div class="flex place-items-center">
                    <component :is=CheckCircleIcon class="mt-2 w-7 h-7 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        我们提供的版本为包含MinGW_w64编译器版本的Code::Blocks
                    </p>
                </div>
            </div>
        </a>
        <a class="shadow mx-auto grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
            href="https://code.visualstudio.com/">
            <div class="grid place-items-center">
                <img class="inset-0 object-cover w-full" src="@/assets/vsc.png" alt="" />
            </div>

            <div class="p-8 sm:col-span-2">
                <ul class="flex space-x-1">
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-pink-500 rounded-full"> All
                        Language </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-500 rounded-full"> Code
                        Editor </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full"> Most
                        Popular </li>
                </ul>

                <h5 class="mt-4 font-bold">Visual Studio Code</h5>

                <p class="mt-2 text-sm text-gray-500">
                    VSCode（全称：Visual Studio Code）是一款由微软开发且跨平台的免费源代码编辑器。该软件支持语法高亮、代码自动补全（又称
                    IntelliSense）、代码重构、查看定义功能，并且内置了命令行工具和 Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装扩展以拓展软件功能。
                    <br />在 2019 年的 Stack Overflow 组织的开发者调查中，Visual Studio Code 被认为是最受开发者欢迎的开发环境。
                </p>
                <div class="flex place-items-center">
                    <component :is=ExclamationCircleIcon class="mt-2 w-9 h-9 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        由于vscode配置较为复杂，我们不建议新手入门即使用vscode
                    </p>
                </div>
                <div class="flex place-items-center">
                    <component :is=CogIcon class="mt-2 w-12 h-12 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        你可能需要进行额外的配置以使其能够编写和运行C++、Python、JAVA等语言的程序
                    </p>
                </div>
            </div>
        </a>
        <a class="shadow mx-auto grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
            href="https://versaweb.dl.sourceforge.net/project/mingw-w64/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe">
            <div class="grid place-items-center">
                <img class="inset-0 object-cover w-full" src="@/assets/mingw.png" alt="" />
            </div>

            <div class="p-8 sm:col-span-2">
                <ul class="flex space-x-1">
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                        C/C++ </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-amber-500 rounded-full">
                        Compiler </li>

                </ul>

                <h5 class="mt-4 font-bold">MinGW</h5>

                <p class="mt-2 text-sm text-gray-500">
                    MinGW，是Minimalist GNU for
                    Windows的缩写。它是一个可自由使用和自由发布的Windows特定头文件和使用GNU工具集导入库的集合，允许你在GNU/Linux和Windows平台生成本地的Windows程序而不需要第三方C运行时（C
                    Runtime）库。
                    <br />MinGW 并不是一个 C/C++ 编译器，而是一套 GNU 工具集合。除开 GCC (GNU 编译器集合) 以外，MinGW 还包含有一些其他的 GNU 程序开发工具。
                </p>
                <div class="flex place-items-center">
                    <component :is=CodeIcon class="mt-2 w-10 h-10 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        我们推荐使用的安装配置："Version-8.1.0; Architecture-x86_64; Threads-posix; Exception-seh"
                    </p>
                </div>
                <div class="flex place-items-center">
                    <component :is=AcademicCapIcon class="mt-2 w-4 h-4 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        请参考有关教程进行配置
                    </p>
                </div>
            </div>
        </a>
        <a class="shadow mx-auto grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3"
            href="https://github.com/marktext/marktext/releases/download/v0.17.1/marktext-setup.exe">
            <div class="grid place-items-center">
                <img class="inset-0 object-cover w-full" src="@/assets/marktext.png" alt="" />
            </div>

            <div class="p-8 sm:col-span-2">
                <ul class="flex space-x-1">
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-emerald-500 rounded-full">
                        Markdown </li>
                    <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-lime-500 rounded-full"> Text
                        Editor </li>

                </ul>

                <h5 class="mt-4 font-bold">MarkText</h5>

                <p class="mt-2 text-sm text-gray-500">
                    Mark Text 是一个简单而优雅的开源 Markdown 编辑器，专注于速度和可用性，适用于 Linux、MacOS 和 Windows，是新一代的 Markdown 编辑器。
                    <br />Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者HTML）文档。
                </p>
                <div class="flex place-items-center">
                    <component :is=BadgeCheckIcon class="mt-2 w-10 h-10 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        如果你已经拥有Typora付费订阅，我们同样推荐你使用Typora作为Markdown编辑器
                    </p>
                </div>
                <div class="flex place-items-center">
                    <component :is=BookOpenIcon class="mt-2 w-12 h-12 sm:w-6 sm:h-6" />
                    <p class="mt-2 ml-2 text-sm text-gray-800">
                        你可能需要预先学习Markdown语言相关的语法知识，以更流畅的使用Markdown撰写笔记、博客等
                    </p>
                </div>
            </div>
        </a>
    </div>
    



    <FooterComponent />
</template>

<script setup>
import FooterComponent from "@/components/footer.vue"
import BannerComponent from "@/components/banner.vue"
import { BeakerIcon, InformationCircleIcon, ExclamationCircleIcon, BadgeCheckIcon, BookOpenIcon, CogIcon, CheckCircleIcon, CodeIcon, AcademicCapIcon } from '@heroicons/vue/outline'
</script>



