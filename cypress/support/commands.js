Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type ('Jaqueline')
    cy.get('#lastName').type('Voitexem')
    cy.get('#email').type('jake_voitexem@yahoo.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})