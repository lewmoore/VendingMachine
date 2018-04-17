function VendingMachine(){
  this.itemList = ['Kit-Kat', 'Coca-Cola', 'Crisps']
}

VendingMachine.prototype.viewItems = function(){
  return this.itemList
}
