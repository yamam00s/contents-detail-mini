import { Contents, Status, Stock } from "~/types"
import dayjs from "dayjs";

export default class ConentsDetail {
  public readonly contents!: Contents
  public readonly status!: Status
  public readonly stock!: Stock

  constructor(
    init: Partial<ConentsDetail>
  ) {
    Object.assign(this, init);
  }

  // エラー処理
  private errorHandring(message: string): void {
    console.log(message)
  }

  // 在庫の確認
  public checkStock(): boolean {
    return this.stock.is_stock
  }

  // 日付の確認
  public checkTerm(): void {
    if (dayjs().isBefore(this.contents.started_day)) {
      this.errorHandring('期間前です')
    }
    if (dayjs().isAfter(this.contents.end_day)) {
      this.errorHandring('期間が終了しています')
    }
  }
}