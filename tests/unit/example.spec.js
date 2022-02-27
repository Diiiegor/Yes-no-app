describe('Example Component',()=>{

  test('Must be higher than 10',()=>{

    //Arrange
    let value = 10

    //Act
    value = value+2

    //Assert
    expect(value).toBeGreaterThan(10);
  })

})