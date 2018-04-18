describe("Crisps", function(){

  var crisps

  beforeEach(function(){
    crisps = new Crisps
  })

  it('initialises with a name property', function(){
    expect(crisps.name).toEqual('Crisps')
  })

  it('initialises with a price property', function(){
    expect(crisps.price).toEqual(2.75)
  })

  it('initialises with quantity property', function(){
    expect(crisps.quantity).toEqual(5)
  })
})
