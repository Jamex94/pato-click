<script setup>
import { useStore } from '~/store/main'

const { items } = useAppConfig()

const state = useStore()
</script>

<template>
  <div>
    <div class="flex justify-between flex-col-reverse lg:flex-row gap-4 my-8">
      <h1 class="text-5xl font-bold font-headings text-yellow-950 dark:text-yellow-200 truncate" style="--stagger:1" data-animate>
        <pato-coin />{{ state.cash }}
      </h1>
      <div class="flex" style="--stagger:2" data-animate>
        <button class="block bg-amber-300 dark:bg-neutral-800  border-white dark:border-yellow-200  border-2 py-0 shadow-[0_0_0_2px_#000] rounded-l-xl text-xl font-headings shadow-[0_4px_0_#cbbf6e] active:translate-y-1 active:!shadow-none select-none px-3 text-center transition-filter" :class="{ grayscale: state.buyMode !== 1 }" @click="state.buyMode = 1">
          &times;1
        </button>
        <button class="block bg-amber-300 dark:bg-neutral-800  border-white dark:border-yellow-200  border-2 py-0 shadow-[0_0_0_2px_#000] text-xl font-headings shadow-[0_4px_0_#cbbf6e] active:translate-y-1 active:!shadow-none select-none px-3 text-center transition-filter" :class="{ grayscale: state.buyMode !== 10 }" @click="state.buyMode = 10">
          &times;10
        </button>
        <button class="block bg-amber-300 dark:bg-neutral-800  border-white dark:border-yellow-200  border-2 py-0 shadow-[0_0_0_2px_#000] text-xl font-headings shadow-[0_4px_0_#cbbf6e] active:translate-y-1 active:!shadow-none select-none px-3 text-center transition-filter" :class="{ grayscale: state.buyMode !== 100 }" @click="state.buyMode = 100">
          &times;100
        </button>
        <button class="block bg-amber-300 dark:bg-neutral-800  border-white dark:border-yellow-200  border-2 py-0 shadow-[0_0_0_2px_#000] rounded-r-xl text-xl font-headings shadow-[0_4px_0_#cbbf6e] active:translate-y-1 active:!shadow-none select-none px-3 text-center transition-filter" :class="{ grayscale: state.buyMode !== 0xDEFECA }" @click="state.buyMode = 0xDEFECA">
          Prox.
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12" style="--stagger:3" data-animate>
      <li v-for="(item, key) in items" :key="item.name">
        <ItemCard v-bind="item" :item-key="key" />
      </li>
    </ul>
  </div>
</template>
