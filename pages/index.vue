<template>
  <div>
    <component
      :is="componentsName"
      :contents="contents"
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
import ConentsDetailFirst from "~/assets/ts/ContentsDetailFirst"
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
  contentsDetail!: ConentsDetailFirst | ConentsDetailLot | ConentsDetailTerm
  contentsAction!: () => Promise<void>

  get componentsName(): string {
    return `CdContents${this.contents.contents_type}`
  }

  get isUnusable(): boolean {
    return !!this.contentsDetail.unusableMessage
  }

  private async dispatchContents(): Promise<void> {
    const action = this.postFirstContents
    await this.contentsDetail.dispatchContents(
      this.contentsAction
    )
  }

  created() {
    const typeName: string = this.contents.contents_type
    const initItem: Partial<ConentsDetail> = {
      contents: this.contents,
      status: this.status,
      stock: this.stock
    }

    if (typeName === 'First') {
      this.contentsDetail = new ConentsDetailFirst(initItem)
      this.contentsAction = this.postFirstContents
    }
    if (typeName === 'Lot') {
      this.contentsDetail = new ConentsDetailLot(initItem)
      this.contentsAction = this.postLotContents
    }
    if (typeName === 'Term') {
      this.contentsDetail = new ConentsDetailTerm(initItem)
      this.contentsAction = this.postTermContents
    }

    if (this.contentsDetail) this.contentsDetail.init()
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
