describe('VendingMachine', function(){
  var vendingMachine = new VendingMachine

  it('is initialised with a list of items', function(){
    expect(vendingMachine.itemList).toEqual(['Kit-Kat', 'Coca-Cola', 'Crisps'])
  })

  it('can view the list of items in the vending machine', function(){
    expect(vendingMachine.viewItems()).toEqual(['Kit-Kat', 'Coca-Cola', 'Crisps'])
  })
})
