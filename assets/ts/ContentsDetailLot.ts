import ConentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailLot extends ConentsDetail {
  constructor(
    init: Partial<ConentsDetail>
  ){
    super(init)
  }

  public init() {
    console.log('抽選だよ')
    this.checkStock()
    this.checkTerm()
  }

  public async dispatchContents(dispatch: () => Promise<void>): Promise<void> {
    await dispatch().catch(() => this.errorHandring('抽選クーポン発行エラー'))
  }
}