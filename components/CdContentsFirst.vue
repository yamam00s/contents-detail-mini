<template>
  <div class="contents">
    ContentsFirst
    <button
      type="button"
      @click="dispatchContents"
    >
      発行する
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
import ContentsDetailFirst from "~/assets/ts/ContentsDetailFirst"

@Component({})
export default class CdContentsFirst extends Vue {
  @Prop() contents!: Contents
  @Prop() status!: Status
  @Prop() stock!: Stock
  @Prop() dispatchContents!: () => Promise<void>

  contentsDetail!: ContentsDetailFirst

  private dispatchFirstContents(): void {
    this.contentsDetail.dispatchFirstContents(
      this.dispatchContents
    )
  }

  mounted() {
    this.contentsDetail = new ContentsDetailFirst({
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
