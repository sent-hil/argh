<template>
  <div id="editor-container" class="antialiased min-h-screen flex">
    <div class="w-2/3">
      <Editor />
    </div>
    <div class="w-1/3 bg-gray-500">
      <TopWithHoles />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Editor from "../components/Editor.vue";
import TopWithHoles from "../components/holders/TopWithHoles.vue";

@Component({
  components: { Editor, TopWithHoles }
})
export default class extends Vue { }
</script>

<style scoped></style>
