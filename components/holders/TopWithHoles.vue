<template>
  <div class="bg-gray-600 w-5 h-6"></div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class TopWithHoles extends Vue {
  mounted() {
    console.log("TopWithHoles mounted!")
  }
}
</script>
