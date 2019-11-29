<template>
  <div class="m-4">
    <select v-model="selected">
      <option disabled value>Please select a holder</option>
      <option
        v-for="(component, name, index) in holders"
        v-bind:key="index"
        v-bind:value="name"
      >{{name}}</option>
    </select>

    <div class="pt-2">Selected: {{ selected }}</div>

    <div ref="holder"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";

import TopWithHoles from "../components/holders/top-with-holes.vue";
import { Name as TopWithHolesName } from "../components/holders/top-with-holes.vue";

@Component({})
export default class HolderSelector extends Vue {
  selected = ""

  @Watch("selected", { immediate: true, deep: true })
  onSelectedChanged(val: string, oldVal: string) {
    if (!val) {
      return;
    }

    // dynamically mount component based on selection
    let componentClass = Vue.extend(this.$data.holders[val]);
    let instance = new componentClass();
    instance.$mount();

    // type defs are not finding `innerHTML` and `appendChild` on holder, so we
    // cast it to any as a HACK (scream!)
    let holder = this.$refs.holder as any;

    // replace all children, should only be 1 since we always remove child
    // before adding new node, before adding new component
    holder.innerHTML = "";
    holder.appendChild(instance.$el);
  }

  mounted() {
    // setting TopWithHolesName as default in data is throwing errors, hence
    // we do it like this; this causes ts errors...
    this.selected = TopWithHolesName
  }

  data() {
    return {
      selected: "",
      holders: {
        [TopWithHolesName]: TopWithHoles,
        [TopWithHolesName + "1"]: TopWithHoles
      }
    };
  }
}
</script>
