<template>
  <div class="contents">
    ContentsFirst
    <button
      type="button"
      @click="$emit('dispatch-contents')"
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
import ConentsDetailFirst from "~/assets/ts/ContentsDetailFirst"

@Component({})
export default class CdContentsFirst extends Vue {
  @Prop() contents!: Contents
  @Prop() status!: Status
  @Prop() stock!: Stock

  contentsDetail!: ConentsDetailFirst

  mounted() {
    this.contentsDetail = new ConentsDetailFirst({
      contents: this.contents,
      status: this.status,
      stock: this.stock
    })
    this.contentsDetail.init()
  }
}
</script>

<style scoped></style>
