describe('CocaCola', function(){

  var cocacola

  beforeEach(function(){
    cocacola = new CocaCola
  })

  it('intialises with name prop', function(){
    expect(cocacola.name).toEqual('Coca Cola')
  })
})
