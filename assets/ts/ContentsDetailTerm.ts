import ConentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailTerm extends ConentsDetail {
  constructor(
    init: Partial<ConentsDetail>
  ){
    super(init)
  }

  public init() {
    console.log('時限だよ')
    this.checkStock()
    this.checkTerm()
  }
}