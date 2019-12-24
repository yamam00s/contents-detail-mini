<template>
  <div class="contents">
    ContentsTerm
    <button
      type="button"
      @click="$emit('dispatch-contents')"
    >
      時限発行する
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
import ConentsDetailTerm from "~/assets/ts/ContentsDetailTerm"

@Component({})
export default class CdContentsTerm extends Vue {
  @Prop() contents!: Contents
  @Prop() status!: Status
  @Prop() stock!: Stock
  @Prop() dispatchContents!: () => Promise<void>

  contentsDetail!: ConentsDetailTerm

  private dispatchTermContents(): void {
    this.contentsDetail.dispatchTermContents(
      this.dispatchContents
    )
  }

  mounted() {
    this.contentsDetail = new ConentsDetailTerm({
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
