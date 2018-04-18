describe('KitKat', function(){

  var kitkat;

  beforeEach(function(){
    kitkat = new KitKat
  });

  it('initialises with a name property', function(){
    expect(kitkat.name).toEqual('KitKat')
  })
})
