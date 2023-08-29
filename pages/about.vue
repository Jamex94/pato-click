<script setup lang="ts">
const devs = [
  {
    url: 'https://github.com/Jamex94',
    name: 'James Trudeau',
    imageUrl: 'https://avatars.githubusercontent.com/u/113483014?s=400&u=ada04cbbc867dbfc83d40718fe8fad6b77e76e28&v=4',
  },
]
const designers = [
  {
    url: 'https://www.instagram.com/arte_revelo/',
    name: 'arte_revelo',
    imageUrl: '/contributors/alberto.jpg',
  },
]
</script>

<template>
  <section>
    <div class="max-w-2xl">
      <h1 class="my-4 text-5xl font-bold font-headings text-pink-950 dark:text-pink-200" style="--stagger:1" data-animate>
        Acerca de
      </h1>
      <p class="mt-2 text-2xl leading-8 comic-text relevance" style="--stagger:2" data-animate>
        Pato-click es un juego idle.
      </p>
    </div>
    <section class="flex flex-wrap gap-12 mt-6" aria-label="Equipo" style="--stagger:3" data-animate>
      <section class="p-4 bg-white border dark:border-neutral-700 rounded-xl dark:bg-neutral-900">
        <h2 class="pb-1 text-3xl font-bold text-pink-900 border-b-2 border-current border-dashed dark:text-pink-300">
          <UnoIcon class="i-mingcute-terminal-box-line" /> Desarrollo y código
        </h2>
        <ul class="flex gap-6 mt-6">
          <li v-for="dev in devs" :key="dev.name">
            <NuxtLink :href="dev.url" target="_blank" rel="noopener noreferrer">
              <div class="flex items-center gap-x-3 bg-white dark:bg-neutral-800 border-2 border-neutral-700 rounded-xl overflow-hidden pr-3 hover:scale-[1.02]">
                <NuxtImg class-name="w-16 h-16" width="64" height="64" :src="dev.imageUrl" alt="" />
                <div>
                  <h3 class="text-3xl font-semibold leading-7 font-headings text-pink-950 dark:text-pink-100 comic-text relevance">
                    @{{ dev.name }}
                  </h3>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section class="p-4 bg-white border dark:border-neutral-700 rounded-xl dark:bg-neutral-900">
        <h2 class="pb-1 text-3xl font-bold text-pink-900 border-b-2 border-current border-dashed dark:text-pink-300">
          <UnoIcon class="i-mingcute-paint-brush-line?mask" /> Ilustración
        </h2>
        <ul class="flex gap-12 mt-6">
          <li v-for="designer in designers" :key="designer.name">
            <NuxtLink :href="designer.url" target="_blank" rel="noopener noreferrer">
              <div class="flex items-center gap-x-3 bg-white dark:bg-neutral-800 border-2 border-neutral-700 rounded-xl overflow-hidden pr-3 hover:scale-[1.02]">
                <NuxtImg class-name="w-16 h-16" width="64" height="64" :src="designer.imageUrl" alt="" />
                <div>
                  <h3 class="text-3xl font-semibold leading-7 font-headings text-pink-950 dark:text-pink-100 comic-text relevance">
                    @{{ designer.name }}
                  </h3>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>
