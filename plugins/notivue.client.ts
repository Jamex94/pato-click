import { notivue } from 'notivue'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(notivue, {
    position: 'bottom-right',
  })
})
