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
import ConentsDetailLot from "~/assets/ts/ContentsDetailLot"


@Component({})
export default class CdContentsLot extends Vue {
  @Prop() contents!: Contents
  @Prop() status!: Status
  @Prop() stock!: Stock
  @Prop() dispatchContents!: () => Promise<void>

  contentsDetail!: ConentsDetailLot

  private dispatchLotContents(): void {
    this.contentsDetail.dispatchLotContents(
      this.dispatchContents
    )
  }

  mounted() {
    this.contentsDetail = new ConentsDetailLot({
      contents: this.contents,
      status: this.status,
      stock: this.stock
    })
    this.contentsDetail.init()
    this.$emit(
      'set-unusable-message',
      this.contentsDetail.unusableMessage
    )
  }
}
</script>

<style scoped></style>
