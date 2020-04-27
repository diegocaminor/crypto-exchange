<template>
  <header class="shadow">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-blue-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Crypto Exchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
          <a target="_blank" href="https://github.com/diegocaminor"
            ><px-github-icon class="social-icon"
          /></a>
          <a target="_blank" href="https://www.linkedin.com/in/diegocaminor/"
            ><px-linkedin-icon class="social-icon"
          /></a>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'
import PxGithubIcon from '@/components/PxGithubIcon'
import PxLinkedinIcon from '@/components/PxLinkedinIcon'

export default {
  name: 'PxHeader', // esta propiedad es opcional pero es una buena práctica

  components: { PxIcon, PxGithubIcon, PxLinkedinIcon },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
