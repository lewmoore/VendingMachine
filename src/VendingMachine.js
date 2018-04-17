function VendingMachine(){
  this.itemList = {'Kit-Kat': 1.50, 'Coca-Cola': 3.60, 'Crisps': 2.75}
}

VendingMachine.prototype.viewItems = function(){
  return this.itemList
}
