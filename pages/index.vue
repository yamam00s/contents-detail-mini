<template>
  <div>
    <template v-if="isError">
      <p>エラーです！</p>
    </template>
    <template v-if="!isError">
      <template v-if="!unusableMessage">
        <CdContentsFirst
          v-if="contents.contents_type === 'First'"
          :contents="contents"
          :status="status"
          :stock="stock"
          :dispatch-contents="postFirstContents"
          @set-unusable-message="setUnusableMessage"
        />

        <CdContentsLot
          v-if="contents.contents_type === 'Lot'"
          :contents="contents"
          :status="status"
          :stock="stock"
          :dispatch-contents="postLotContents"
          @set-unusable-message="setUnusableMessage"
        />

        <CdContentsTerm
          v-if="contents.contents_type === 'Term'"
          :contents="contents"
          :status="status"
          :stock="stock"
          :dispatch-contents="postTermContents"
          @set-unusable-message="setUnusableMessage"
        />
      </template>

      <div v-if="unusableMessage">
        <p>{{ unusableMessage }}</p>
      </div>
    </template>
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

  isError: boolean = false
  unusableMessage: string = ''

  private setUnusableMessage(message: string): void {
    this.unusableMessage = message
  }

  async asyncData (context: Context) {
    try {
      const { store } = context
      await store.dispatch('contents/fetchContents')
      await store.dispatch('contents/fetchStatus')
      await store.dispatch('contents/fetchStock')
    } catch {
      return {
        isError: true
      }
    }
  }
}
</script>

<style scoped></style>
