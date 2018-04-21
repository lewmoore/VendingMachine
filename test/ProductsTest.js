describe('Products', function(){

  var products

  beforeEach(function(){
    products = new Products('')
  })

  it('initialises with a name prop', function(){
    expect(products.name).toEqual('')
  })
})
