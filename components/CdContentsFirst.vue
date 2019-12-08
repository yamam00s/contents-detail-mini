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
import { Contents } from "~/types";

@Component({})
export default class CdContentsFirst extends Vue {
  @Prop() contents!: Contents
}
</script>

<style scoped></style>
