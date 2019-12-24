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

  contentsDetail!: ConentsDetailLot

  mounted() {
    this.contentsDetail = new ConentsDetailLot({
      contents: this.contents,
      status: this.status,
      stock: this.stock
    })
    this.contentsDetail.init()
  }
}
</script>

<style scoped></style>
