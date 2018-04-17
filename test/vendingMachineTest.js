describe('VendingMachine', function(){
  var vendingMachine = new VendingMachine

  it('is initialised with a list of items', function(){
    expect(vendingMachine.itemList).toEqual({'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
  })

  it('can view the list of items in the vending machine', function(){
    expect(vendingMachine.viewItems()).toEqual({'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
  })

  it('can select an item in the intemList', function(){
    expect(vendingMachine.selectItem('Kit-Kat')).toEqual("You have selected Kit-Kat, please insert £1.55")
  })
})
