class VendingMachine {
  constructor(crisps = new Crisps){
    this.itemList = {'KitKat': 1.55, 'CocaCola': 3.65, 'Crisps': 2.75}
    this.currentBalance = 0
  }

  viewItems(){
    // console.log(this.itemList.crisps.name)
    return this.itemList
  }

  selectItem(item){
    if (this.currentBalance >= this.itemList[item]) {
      return this._successfulDispense(item)
    } else {
      return "You have selected " + item + ", please insert £" + this.itemList[item]
    }
  }

  insertCoin(amount){
    this.currentBalance += amount
  }

  _successfulDispense(item){
    this.currentBalance -= this.itemList[item]
    return "Thank you, Please take your item."
  }

  collectChange(){
    var change = this.currentBalance
    this.currentBalance = 0
    return change + ' returned, please take your change'
  }

  returnCoins(){
    var change = this.currentBalance
    this.currentBalance = 0
    return 'Coins returned'
  }
}
