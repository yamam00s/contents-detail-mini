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

  contentsDetail!: ConentsDetailTerm

  mounted() {
    this.contentsDetail = new ConentsDetailTerm({
      contents: this.contents,
      status: this.status,
      stock: this.stock
    })
    this.contentsDetail.init()
  }
}
