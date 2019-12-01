import ConentsDetail from "~/assets/ts/ContentsDetail"

export default class ContentsDetailLot extends ConentsDetail {
  constructor(
    init: Partial<ConentsDetail>
  ){
    super(init)
  }

  public lotInit() {
    console.log('抽選だよ')
    this.checkStock()
    this.checkTerm()
  }
}