<template>
  <div class="contents">
    ContentsLot
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
