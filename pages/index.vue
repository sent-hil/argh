<template>
  <div id="editor-container" class="bg-gray-300 antialiased min-h-screen flex">
    <div class="w-2/3">
      <canvas id="editor" />
    </div>
    <div class="w-1/3 bg-gray-500" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { fabric } from "fabric";

@Component({})
export default class extends Vue {
  mounted() {
    const canvas = new fabric.Canvas("editor", {
      backgroundColor: "rgb(226, 232, 240)", // same color as bg-gray-300
      height: this.canvasHeight(),
      width: this.canvasWidth()
    })

    // create a rectangle object
    const rect = new fabric.Rect({
      fill: "red",
      width: 80,
      height: 80,
      hasControls: true
    })

    canvas.add(rect)
  }

  // Returns screen width * 2/3 which is the allowed max size for editor.
  canvasWidth(): number {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    return (width * 2) / 3
  }

  // Returns screen height.
  canvasHeight(): number {
    return window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  }
}
</script>

<style scoped></style>
