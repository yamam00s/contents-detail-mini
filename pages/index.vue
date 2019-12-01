<template>
  <div>
    Nuxt TypeScript Starter
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"
import { Contents } from "~/types";

@Component({})
export default class contents extends Vue {
  @Getter("contents/contents") contents!: Contents
  @Action("contents/fetchContents") fetchContents!: any

  async mounted() {
    await this.fetchContents()
    console.log(this.contents)
  }
}
</script>

<style scoped></style>
ya