import ConentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailFirst extends ConentsDetail {
  constructor(
    init: Partial<ConentsDetail>
  ){
    super(init)
  }

  public init() {
    console.log('先着だよ')
    this.checkStock()
    this.checkTerm()
  }
}