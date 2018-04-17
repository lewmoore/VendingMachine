function VendingMachine(){
  this.itemList = {'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75}
}

VendingMachine.prototype.viewItems = function(){
  return this.itemList
}

VendingMachine.prototype.selectItem = function(item){
  return "You have selected " + item + ", please insert £" + this.itemList[item]
}
