<template>
  <div>
    <div>
      <input type="checkbox" id="checkbox" v-model="hasSupports">
      <label for="checkbox">{{ hasSupports }}</label>
    </div>
    <div class="p-5">
      <svg xmlns="http://www.w3.org/2000/svg" :width="topLength+2" height="102">
        <defs />
        <g fill="none" fill-rule="evenodd" :stroke="stroke">
          <path
            v-if="hasSupports"
            d="M21 1h20v76.5517241C41 84.9790021 36.5228475 91 31 91s-10-6.0209979-10-13.4482759h0V1z"
          />
          <path
            v-if="hasSupports"
            d="M61 1h20v76.5517241C81 84.9790021 76.5228475 91 71 91s-10-6.0209979-10-13.4482759h0V1z"
          />
          <rect :width="topLength" height="100" x="1" y="1" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

export const Name = "Top With Holes";

@Component({})
export default class TopWithHoles extends Vue {
  @Prop({ default: 2 }) readonly holeCount!: number;
  @Prop({ default: 20 }) readonly gutter!: number;
  @Prop({ default: 28 }) readonly holeRadius!: number;

  @Prop({ default: 200 }) readonly topWidth!: number;

  @Prop({ default: true }) readonly hasSupports!: boolean;
  @Prop({ default: 2 }) readonly supportCount!: number;
  @Prop({ default: 20 }) readonly supportWidth!: number;

  @Prop({ default: "#000" }) readonly stroke!: string;

  //pxSuffix(p: number): string {
    //return `${p}px`;
  //}

  // Returns size of outer view box; add 2 so outer rectangle isn't cut off.
  viewBox(): string {
    return `0 0 ${this.topLength + 2} ${this.topWidth + 2}`;
  }

  get topLength(): number {
    let length: number = 0;

    // add gutters on either side
    length += this.gutter * 2;

    if (this.hasSupports) {
      // add support + gutters for supports
      length += this.supportCount * (this.supportWidth + this.gutter);

      // remove 1 gutter, since above we added the right most gutter already
      length -= this.gutter;
    }

    return length;
  }

  get firstHoleLocation(): number {
    // first hole location varies by if there are supports are not
    if (this.hasSupports) {
      return this.supportWidth + this.gutter;
    }

    return 0;
  }
}
</script>
