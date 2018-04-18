class VendingMachine {
  constructor(){
    this.itemList = {'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75}
    this.currentBalance = 0
  }

  viewItems(){
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
