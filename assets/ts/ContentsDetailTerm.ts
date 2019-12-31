import ContentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailTerm extends ContentsDetail {
  constructor(
    init: Partial<ContentsDetail>
  ){
    super(init)
  }

  public init() {
    console.log('時限だよ')
    this.checkStock()
    this.checkTerm()
  }

  public async dispatchTermContents(dispatch: () => Promise<void>): Promise<void> {
    await dispatch().catch(() => this.unusableMessage = '時限クーポン発行エラー')
  }
}