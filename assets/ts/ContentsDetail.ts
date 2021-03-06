import { Contents, Status, Stock } from "~/types"
import dayjs from "dayjs";

export default class ContentsDetail {
  public readonly contents!: Contents
  public readonly status!: Status
  public readonly stock!: Stock
  // errorメソッド以外から書き換えられないようにする
  private _unusableMessage!: string

  constructor(
    init: Partial<ContentsDetail>
  ) {
    Object.assign(this, init)
    this._unusableMessage = ''
  }

  get unusableMessage(): string {
    return this._unusableMessage;
  }

  set unusableMessage(message: string) {
    this._unusableMessage = message
  }

  // 在庫の確認
  public checkStock(): void {
    if (!this.stock.is_stock) {
      this.unusableMessage = '在庫切れです'
    }
  }

  // 日付の確認
  public checkTerm(): void {
    if (dayjs().isBefore(this.contents.started_day)) {
      this.unusableMessage = '期間前です'
    }
    if (dayjs().isAfter(this.contents.end_day)) {
      this.unusableMessage = '期間が終了しています'
    }
  }
}