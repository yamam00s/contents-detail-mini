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
import { Contents } from "~/types";

@Component({})
export default class ContentsLot extends Vue {
  @Prop() contents!: Contents
}
</script>

<style scoped></style>
