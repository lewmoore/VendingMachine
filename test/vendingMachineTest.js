describe('VendingMachine', function(){

  var vendingMachine

  beforeEach(function(){
    vendingMachine = new VendingMachine
  })

  it('is initialised with a list of items', function(){
    expect(vendingMachine.itemList).toEqual({'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
  })

  it('can view the list of items in the vending machine', function(){
    expect(vendingMachine.viewItems()).toEqual({'Kit-Kat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
  })

  it('can select an item in the intemList', function(){
    expect(vendingMachine.selectItem('Kit-Kat')).toEqual("You have selected Kit-Kat, please insert £1.55")
  })

  it('intialises with a balance of 0', function(){
    expect(vendingMachine.currentBalance).toEqual(0)
  })

  it('is able to accept money through insertcoin', function(){
    vendingMachine.insertCoin(10)
    expect(vendingMachine.currentBalance).toEqual(10)
  })

  it('if balance is correct it dispenses item', function(){
    vendingMachine.insertCoin(2)
    expect(vendingMachine.selectItem('Kit-Kat')).toEqual('Thank you, Please take your item.')
  })

  it('subtracts cost of dispensed item from balance', function(){
    vendingMachine.insertCoin(10)
    vendingMachine.selectItem('Kit-Kat')
    expect(vendingMachine.currentBalance).toEqual(8.45)
  })

  it("dispenses change when collectChange method is called", function(){
    vendingMachine.insertCoin(10)
    vendingMachine.selectItem('Kit-Kat')
    vendingMachine.collectChange()
    expect(vendingMachine.currentBalance).toEqual(0)
  })
})
