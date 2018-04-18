describe('VendingMachine', function(){

  var vendingMachine

  beforeEach(function(){
    vendingMachine = new VendingMachine

  })
  describe('Without Coins', function(){
    it('is initialised with a list of items', function(){
      expect(vendingMachine.itemList).toEqual({'KitKat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
    })

    it('can view the list of items in the vending machine', function(){
      expect(vendingMachine.viewItems()).toEqual({'KitKat': 1.55, 'Coca-Cola': 3.65, 'Crisps': 2.75})
    })

    it('can select an item in the intemList', function(){
      expect(vendingMachine.selectItem('KitKat')).toEqual("You have selected KitKat, please insert £1.55")
    })

    it('intialises with a balance of 0', function(){
      expect(vendingMachine.currentBalance).toEqual(0)
    })
  })

  describe('With Coins', function(){

    beforeEach(function(){
      vendingMachine.insertCoin(10)
    })

    it('is able to accept money through insertcoin', function(){
      expect(vendingMachine.currentBalance).toEqual(10)
    })

    it('if balance is correct it dispenses item', function(){
      expect(vendingMachine.selectItem('KitKat')).toEqual('Thank you, Please take your item.')
    })

    it('subtracts cost of dispensed item from balance', function(){
      vendingMachine.selectItem('KitKat')
      expect(vendingMachine.currentBalance).toEqual(8.45)
    })

    it("dispenses change when collectChange method is called", function(){
      vendingMachine.selectItem('Kit-Kat')
      vendingMachine.collectChange()
      expect(vendingMachine.currentBalance).toEqual(0)
    })

    it('shows success message with change value when collectChange is called', function(){
      vendingMachine.selectItem('KitKat')
      expect(vendingMachine.collectChange()).toEqual('8.45 returned, please take your change')
    })

    it('returnCoins function returns entire currentBalance', function(){
      expect(vendingMachine.returnCoins()).toEqual('Coins returned')
    })

    it('returnCoins resets balance to 0', function(){
      vendingMachine.returnCoins()
      expect(vendingMachine.currentBalance).toEqual(0)
    })
  })
})
