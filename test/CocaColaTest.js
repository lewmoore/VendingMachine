describe('CocaCola', function(){

  var cocacola

  beforeEach(function(){
    cocacola = new CocaCola
  })

  it('intialises with name prop', function(){
    expect(cocacola.name).toEqual('Coca Cola')
  })

  it('initialises with price prop', function(){
    expect(cocacola.price).toEqual(3.65)
  })

  it('intialises with quantity prop', function(){
    expect(cocacola.quantity).toEqual(5)
  })
})
