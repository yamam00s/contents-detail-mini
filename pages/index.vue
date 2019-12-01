<template>
  <div>
    <component :is="componentsName" :contents="contents" ></component>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"
import { Context } from "@nuxt/types"
import { Contents, Status, Stock } from "~/types"

import ContentsFirst from "~/components/ContentsFirst.vue"
import ContentsLot from "~/components/ContentsLot.vue"
import ContentsTerm from "~/components/ContentsTerm.vue"
@Component({
  components: {
    ContentsFirst,
    ContentsLot,
    ContentsTerm
  }
})
export default class contents extends Vue {
  @Getter('contents/contents') contents!: Contents
  @Getter('contents/status') status!: Status
  @Getter('contents/stock') stock!: Stock
  // @Action('contents/fetchContents') fetchContents!: any
  // @Action('contents/fetchStatus') fetchStatus!: any
  // @Action('contents/fetchStock') fetchStock!: any

  get componentsName(): string {
    return `Contents${this.contents.contents_type}`
  }

  async fetch (context: Context) {
    const { store } = context
    await store.dispatch('contents/fetchContents')
    await store.dispatch('contents/fetchStatus')
    await store.dispatch('contents/fetchStock')
  }
}
</script>

<style scoped></style>
