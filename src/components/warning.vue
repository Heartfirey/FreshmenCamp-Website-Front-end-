<template>
<div class="flex items-center justify-between gap-4 p-4 mt-8 text-red-700 border rounded border-red-900/10 bg-red-50" role="alert">
        <div class="flex items-center gap-4">
            <span class="p-2 text-white bg-red-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/>
            </svg> </span>
            <p>
                <strong class="text-sm font-medium"> 请注意！ </strong>
                <span class="block text-xs opacity-90"> <strong>本训练营课程不收取任何费用，参加完全自愿。任何以本训练营名义收取费用的均非官方渠道！请注意甄别！</strong></span> 
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WarningFee',
        props: {
            msg: String
        }
    }
</script>
