<template>
  <div>
    <CdContentsFirst
      v-if="contents.contents_type === 'First'"
      :contents="contents"
      :status="status"
      :stock="stock"
      :dispatch-contents="postFirstContents"
    />
    <CdContentsLot
      v-if="contents.contents_type === 'Lot'"
      :contents="contents"
      :status="status"
      :stock="stock"
      :dispatch-contents="postLotContents"
    />
    <CdContentsTerm
      v-if="contents.contents_type === 'Term'"
      :contents="contents"
      :status="status"
      :stock="stock"
      :dispatch-contents="postTermContents"
    />
    <!-- <div v-if="isUnusable">
      <p>{{ contentsDetail.unusableMessage }}</p>
    </div> -->
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
