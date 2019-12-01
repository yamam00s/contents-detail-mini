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

  // 在庫の確認
  public checkStock(): boolean {
    return this.stock.is_stock
  }

  // 在庫の確認
  public checkTerm(): void {
    console.log(dayjs(this.contents.started_day))
  }
}