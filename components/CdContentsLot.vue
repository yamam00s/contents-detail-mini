<template>
  <div class="contents">
    ContentsLot
    <button
      type="button"
      @click="$emit('dispatch-contents')"
    >
      抽選する
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Contents, Status, Stock  } from "~/types";
import ContentsDetailLot from "~/assets/ts/ContentsDetailLot"


@Component({})
export default class CdContentsLot extends Vue {
  @Prop() contents!: Contents
  @Prop() status!: Status
  @Prop() stock!: Stock
  @Prop() dispatchContents!: () => Promise<void>

  contentsDetail!: ContentsDetailLot

  private dispatchLotContents(): void {
    this.contentsDetail.dispatchLotContents(
      this.dispatchContents
    )
  }

  mounted() {
    this.contentsDetail = new ContentsDetailLot({
      contents: this.contents,
      status: this.status,
      stock: this.stock
    })
    this.contentsDetail.init()
    this.$emit(
      'set-unusable-message',
      this.contentsDetail.unusableMessage
    )
    this.$emit('end-loading', false)
  }
}
</script>

<style scoped></style>
