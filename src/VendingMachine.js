function VendingMachine(){
  this.itemList = {'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75}
  this.currentBalance = 0
}

VendingMachine.prototype.viewItems = function(){
  return this.itemList
}

VendingMachine.prototype.selectItem = function(item){
  if (this.currentBalance >= this.itemList[item]) {
    return "Thank you, Please take your item."
  } else {
    return "You have selected " + item + ", please insert £" + this.itemList[item]
  }
}

VendingMachine.prototype.insertCoin = function(amount){
  this.currentBalance += amount
}
