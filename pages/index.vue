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
// components
import ContentsFirst from "~/components/ContentsFirst.vue"
import ContentsLot from "~/components/ContentsLot.vue"
import ContentsTerm from "~/components/ContentsTerm.vue"
// class
import ConentsDetail from "~/assets/ts/ContentsDetail"
import ConentsDetailFirst from "~/assets/ts/ContentsDetailFirst"
import ConentsDetailLot from "~/assets/ts/ContentsDetailLot"
import ConentsDetailTerm from "~/assets/ts/ContentsDetailTerm"

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

  created() {
    const typeName: string = this.contents.contents_type
    const initItem: Partial<ConentsDetail> = {
      contents: this.contents,
      status: this.status,
      stock: this.stock
    }
    let contentsDetail

    if (typeName === 'First') contentsDetail = new ConentsDetailFirst(initItem)
    if (typeName === 'Lot') contentsDetail = new ConentsDetailLot(initItem)
    if (typeName === 'Term') contentsDetail = new ConentsDetailTerm(initItem)

    if (contentsDetail) contentsDetail.init()
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
