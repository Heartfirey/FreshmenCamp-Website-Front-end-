<template>
    <div
        class="relative overflow-hidden mb-10 md:rounded-xl shadow-2xl flex CodeWindow_root__1fMBP bg-indigo-500 MobileFirst_code__12zOj">
        <div class="absolute inset-0 bg-black bg-opacity-75"></div>
        <div class="relative w-full flex flex-col">
            <div class="flex-none h-11 flex items-center px-4">
                <div class="flex space-x-1.5">
                    <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
                    <div class="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                    <div class="w-3 h-3 border-2 rounded-full border-green-400"></div>
                </div>
                <div class="inline-block absolute right-0 mr-4 px-3 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full">C/C++</div>
            </div>
            <div class="relative text-left border-t border-white border-opacity-30 min-h-0 flex-auto flex flex-col">
                <div class="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25" style="width:50px"></div>
                <div class="w-full flex-auto flex min-h-0 overflow-auto">
                    <div class="w-full relative flex-auto">
                        <pre class="flex min-h-full text-xs md:text-sm">
                            <div aria-hidden="true" class="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none" style="width:50px">1<br>2<br>3<br>4<br>5<br>6<br>7</div><code class="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto"><div><font color="#18FFFF">#include &lt;</font><font color="#B2FF59">studio.h</font><font color="#18FFFF">&gt;</font><br/><br/><font color="#B388FF">int <font color="#40C4FF">main</font><font color="#FFD740">()</font></font><font color="#FFD740">{</font><br/><span>    </span><font color="#40C4FF">printf</font><font color="#B388FF">(</font><font color="#B2FF59">"HelloWorld!<font color="gray">\n</font>"</font><font color="#B388FF">)</font>;<br/><span>    </span><font color="#18FFFF">return</font> <font color="#FF5252">0</font>;<br/><font color="#FFD740">}</font></div></code></pre>
                    </div>
                </div>
            </div>
            <div class="relative text-left border-t border-white border-opacity-30 min-h-0 flex-auto flex flex-col">
                <div class="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25" style="width:50px"></div>
                <div class="w-full flex-auto flex min-h-0 overflow-auto">
                    <div class="w-full relative flex-auto">
                        <pre class="flex min-h-full text-xs md:text-sm">
                            <div aria-hidden="true" class="hidden md:block text-white text-opacity-50 flex-none py-4 text-right select-none" style="width:50px"><component :is=TerminalIcon class="w-4 h-4 sm:w-5 sm:h-5 mx-auto" /></div><code class="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto"><div><font color="#FFAB40">$</font> <font color="#FF4081">Console</font>> HelloWorld!</div></code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { TerminalIcon } from '@heroicons/vue/outline'
</script>




