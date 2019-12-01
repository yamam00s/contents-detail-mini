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
  @Getter("contents/status") status!: Contents
  @Getter("contents/stock") stock!: Contents
  @Action("contents/fetchContents") fetchContents!: any
  @Action("contents/fetchStatus") fetchStatus!: any
  @Action("contents/fetchStock") fetchStock!: any

  async mounted() {
    await this.fetchContents()
    await this.fetchStatus()
    await this.fetchStock()
    console.log(this.$dayjs('2018-08-08'))
  }
}
</script>

<style scoped></style>
