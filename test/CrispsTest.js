describe("Crisps", function(){

  var crisps

  beforeEach(function(){
    crisps = new Crisps
  })

  it('initialises with a price property', function(){
    expect(crisps.price).toEqual(2.75)
  })
})
