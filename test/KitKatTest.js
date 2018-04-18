describe('KitKat', function(){

  var kitkat;

  beforeEach(function(){
    kitkat = new KitKat
  });

  it('initialises with a name property', function(){
    expect(kitkat.name).toEqual('KitKat')
  })

  it('intialises with a price prop', function(){
    expect(kitkat.price).toEqual(1.55)
  })

  it('initialises with a quantity prop', function(){
    expect(kitkat.quantity).toEqual(5)
  })
})
