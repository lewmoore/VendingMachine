describe('VendingMachine', function(){
  var vendingMachine = new VendingMachine

  it('is initialised with a list of items', function(){
    expect(vendingMachine.itemList).toEqual({'Kit-Kat': 1.50, 'Coca-Cola': 3.60, 'Crisps': 2.75})
  })

  it('can view the list of items in the vending machine', function(){
    expect(vendingMachine.viewItems()).toEqual({'Kit-Kat': 1.50, 'Coca-Cola': 3.60, 'Crisps': 2.75})
  })
})
