/// <reference types="cypress" />

describe('List Initial', () => {
  context('720px resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('/')
      })
    })

    describe('list characters', () => {
      it('Shoul list characters', () => {
        cy.get('[data-cy="nav-input"]').type('rick')

        cy.get('[role="button"]').click()
        cy.url().should('include', 'characters/rick?page=1')
      })
    })

    describe('Modal', () => {
      it('Shoul modal character', () => {
        cy.get('[role="item_container"]:first').click()
        cy.get('[role="modal"]')
          .should('contain', 'SOBRE')
          .should('contain', 'ORIGEM')
          .should('contain', 'LOCALIDADE')
      })
    })
  })

  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('/')
      })
    })

    describe('list characters', () => {
      it('Shoul list characters', () => {
        cy.get('[data-cy="nav-input"]').type('rick')

        cy.get('[role="button"]').click()
        cy.url().should('include', 'characters/rick?page=1')
      })
    })

    describe('Modal', () => {
      it('Shoul modal character', () => {
        cy.get('[role="item_container"]:first').click()
        cy.get('[role="modal"]')
          .should('contain', 'SOBRE')
          .should('contain', 'ORIGEM')
          .should('contain', 'LOCALIDADE')
      })
    })
  })
})
