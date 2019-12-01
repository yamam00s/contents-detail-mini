import Vue from "vue"
import dayjs from "dayjs"

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs(date?: dayjs.ConfigType, option?: dayjs.OptionType, locale?: string): dayjs.Dayjs;
  }
}
