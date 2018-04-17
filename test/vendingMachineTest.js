describe('vendingMachine', function(){
  var vendingMachine = new VendingMachine

  it('is initialised with a list of items', function(){
    expect(vendingMachine.itemList).toEqual(['Kit-Kat', 'Coca-Cola', 'Crisps'])
  })
})
