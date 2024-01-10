/// <reference types="cypress" />

describe('pesquisa google',()=>{
  // url de pesquisa
  const urlGoolgle = 'https://google.com/'
  //termo para ser pesquisado
  const seachterm = 'Youtube'

it('pesquisando youtube',()=>{
  cy.visit(urlGoolgle)
  cy.get('#APjFqb').type(seachterm)
  .type('{enter}')
  //verificando se o link para o youtube existe
  cy.contains('YouTube: Home', { timeout: 5000 })
  .should('be.visible').click()
  // validando se a url atual tem youtube
  cy.url().should('contain', 'Youtube')
  
})

})
