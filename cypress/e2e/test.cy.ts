xdescribe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('visits the app root url', () => {
    cy.visit('www.google.com')
    cy.get('')
    cy.contains('.FPdoLc > center > .RNmpXc', 'Voy a tener suerte')
  })
})