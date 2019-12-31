import ContentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailFirst extends ContentsDetail {
  constructor(
    init: Partial<ContentsDetail>
  ){
    super(init)
  }

  public init() {
    console.log('先着だよ')
    this.checkStock()
    this.checkTerm()
  }

  public async dispatchFirstContents(dispatch: () => Promise<void>): Promise<void> {
    await dispatch().catch(() => this.unusableMessage = '先着クーポン発行エラー')
  }
}