describe('Products', function(){

  var products

  beforeEach(function(){
    products = new Products('KitKat', 5)
  })

  it('initialises with a name prop', function(){
    expect(products.name).toEqual('KitKat')
  })

  it('initialises with a quantity prop', function(){
    expect(products.quantity).toEqual(5)
  })


})
