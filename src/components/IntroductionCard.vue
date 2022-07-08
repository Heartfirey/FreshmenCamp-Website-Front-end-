<template>


    <!-- <a class="relative block p-8 border border-gray-100 shadow-xl rounded-xl" href="">
  <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
    4.3
  </span>

  <div class="mt-4 text-gray-500 sm:pr-8">
    <svg
      class="w-8 h-8 sm:w-10 sm:h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h5 class="mt-4 text-xl font-bold text-gray-900">Science of Chemstry</h5>

    <p class="hidden mt-2 text-sm sm:block">
      You can manage phone, email and chat conversations all from a single mailbox.
    </p>
  </div>
</a> -->


    <div class="space-y-16 sm:space-y-36 md:space-y-40 lg:space-y-46 xl:space-y-44">
        <section class="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div class="px-2 sm:px-4 md:px-4">
                <h2
                    class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                    完全不了解编程？</h2>
                <figure>
                    <blockquote>
                        <p
                            class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
                            也许编程对你来说曾经是一个“高大上”的词汇，那么不妨让我们一起走近编程，从C语言开始探索程序设计的乐趣！
                        </p>
                    </blockquote>
                    <!-- <figcaption class="sm:text-xl font-medium flex flex-col items-center">
                    <div class="p-1 border-2 border-light-blue-400 rounded-full mb-3"><img
                            src="/_next/static/media/adam.87b7f7dc7e16987ddbf37dd55b1ff705.jpg" alt=""
                            class="w-10 h-10 rounded-full bg-light-blue-100" loading="lazy"></div>
                    <div class="text-gray-900">Adam Wathan</div>
                    <div class="text-light-blue-600">Tailwind CSS</div>
                </figcaption> -->
                </figure>
            </div>
            <CodeCard />

            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 "
                href="/camp/register">
                Get started
                <span class="sr-only">Register</span>
                <svg class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg>
            </a>
        </section>





        <div class="relative">
            <div class="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none"
                style="height:607px;max-height:50vh"></div>
            <div class="flex -my-8 preMove" id="boxParent">
                <ul class="flex items-center py-8 " id="box1">
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform:rotate(-2deg) translateZ(0)">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-cyan-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>Code makes life meaningful.</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-yellow-400 to-orange-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="../assets/heartfirey.jpg" alt=""
                                        class="w-12 h-12 rounded-full bg-cyan-100" loading="lazy">
                                </div>
                                <div class="flex-auto">HeartFireY<br><span class="text-orange-100">计算机科学协会 理事长</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(1deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-fuchsia-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>程序设计是一扇全新的大门，深入了解后你会发现它独特的魅力。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-fuchsia-500 to-purple-600">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-fuchsia-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">Zunipe<br><span class="text-fuchsia-100">计算机科学协会-算法组-现役队员</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform:rotate(-1deg) translateZ(0)">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-orange-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>一入计信深似海，从此程序伴君身。算法英语双管下，发际渐退进大厂。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-orange-400 to-pink-600">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-orange-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">Zen<br><span class="text-orange-100">计算机科学协会-算法组-现役队员</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(2deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-green-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>新的一段旅程 不要犹豫迷茫 放手做自己喜欢的事情 努力付出总会有回报 有方向有努力总是好的</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-green-400 to-cyan-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-green-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">cjj<br><span class="text-green-100">计算机科学协会-算法组-现役队员</span></div>

                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(-2deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-rose-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>算法是程序员的基本功，只要你学计算机就逃不开算法。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-pink-500 to-rose-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png"
                                        alt="" class="w-12 h-12 rounded-full bg-rose-100" loading="lazy"></div>
                                <div class="flex-auto">hbw<br><span class="text-rose-100">计算机科学协会-算法组-现役队员</span></div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                <ul class="flex items-center py-8 " id="box2">
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform:rotate(-2deg) translateZ(0)">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-cyan-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>Code makes life meaningful.</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-yellow-400 to-orange-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="../assets/heartfirey.jpg" alt=""
                                        class="w-12 h-12 rounded-full bg-cyan-100" loading="lazy">
                                </div>
                                <div class="flex-auto">HeartFireY<br><span class="text-orange-100">计算机科学协会 理事长</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(1deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-fuchsia-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>程序设计是一扇全新的大门，深入了解后你会发现它独特的魅力。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-fuchsia-500 to-purple-600">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-fuchsia-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">Zunipe<br><span class="text-fuchsia-100">计算机科学协会-算法组-现役队员</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform:rotate(-1deg) translateZ(0)">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-orange-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>一入计信深似海，从此程序伴君身。算法英语双管下，发际渐退进大厂。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-orange-400 to-pink-600">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-orange-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">Zen<br><span class="text-orange-100">计算机科学协会-算法组-现役队员</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(2deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-green-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>新的一段旅程 不要犹豫迷茫 放手做自己喜欢的事情 努力付出总会有回报 有方向有努力总是好的</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-green-400 to-cyan-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png" alt="" class="w-12 h-12 rounded-full bg-green-100"
                                        loading="lazy">
                                </div>
                                <div class="flex-auto">cjj<br><span class="text-green-100">计算机科学协会-算法组-现役队员</span></div>

                            </figcaption>
                        </figure>
                    </li>
                    <li class="px-3 md:px-4 flex-none">
                        <figure class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
                            style="transform: rotate(-2deg) translateZ(0px);">
                            <blockquote
                                class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                                <svg width="45" height="36" class="mb-5 fill-current text-rose-100">
                                    <path
                                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z">
                                    </path>
                                </svg>
                                <p>算法是程序员的基本功，只要你学计算机就逃不开算法。</p>
                            </blockquote>
                            <figcaption
                                class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-pink-500 to-rose-500">
                                <div class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <img src="@/assets/tx.png"
                                        alt="" class="w-12 h-12 rounded-full bg-rose-100" loading="lazy"></div>
                                <div class="flex-auto">hbw<br><span class="text-rose-100">计算机科学协会-算法组-现役队员</span></div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    name: 'IntroductionCard',
    props: {
        msg: String
    },
    mounted() {
        const box1 = document.getElementById("box1")
        const box2 = document.getElementById("box2")
        let left = 0, right = 0
        setInterval(() => {
            left = left < -100 ? 0 : left - 0.1
            right = right < -100 ? 0 : right - 0.1
            console.log('213')
            box1.style.transform = `translateX(${left}%)`
            box2.style.transform = `translateX(${right}%)`
        }, 18);

    }
}


</script>

<script setup>
import CodeCard from './CodeCard.vue';
</script>


