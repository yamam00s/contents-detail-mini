<template>
  <div>
    <component
      :is="componentsName"
      :contents="contents"
      :status="status"
      :stock="stock"
      @dispatch-contents="dispatchContents"
    />

    <div v-if="isUnusable">
      <p>{{ contentsDetail.unusableMessage }}</p>
    </div>
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
// components
import CdContentsFirst from "~/components/CdContentsFirst.vue"
import CdContentsLot from "~/components/CdContentsLot.vue"
import CdContentsTerm from "~/components/CdContentsTerm.vue"
// class
import ConentsDetail from "~/assets/ts/ContentsDetail"
import ConentsDetailLot from "~/assets/ts/ContentsDetailLot"
import ConentsDetailTerm from "~/assets/ts/ContentsDetailTerm"

@Component({
  components: {
    CdContentsFirst,
    CdContentsLot,
    CdContentsTerm
  }
})
export default class contents extends Vue {
  @Getter('contents/contents') contents!: Contents
  @Getter('contents/status') status!: Status
  @Getter('contents/stock') stock!: Stock
  @Action('contents/postFirstContents') postFirstContents!: any
  @Action('contents/postLotContents') postLotContents!: any
  @Action('contents/postTermContents') postTermContents!: any

  // TODO 型安全ではない
  contentsAction!: () => Promise<void>

  get componentsName(): string {
    return `CdContents${this.contents.contents_type}`
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
