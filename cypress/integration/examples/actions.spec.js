/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('.type() - type into a DOM element', () => {
     cy.contains("Welcome to Your Vue.js App")
  })

  it('check page for vue-cli documentation', () => {
    cy.visit('/')
    cy.contains('div.hello p', 'For a guide and recipes on how to configure')
    .should('exist')
    .find('a')
    .contains('vue-cli documentation')

  })

  it('check page for installed plugins', () => {
    cy.visit('/')
    cy.contains('div.hello h3', 'Installed CLI Plugins').should('exist')

    cy.contains('div.hello ul li a', 'babel').should('exist')

    cy.contains('div.hello ul li a', 'typescript').should('exist')

    cy.contains('div.hello ul li a', 'router').should('exist')

    cy.contains('div.hello ul li a', 'vuex').should('exist')

    cy.contains('div.hello ul li a', 'eslint').should('exist')

    cy.contains('div.hello ul li a', 'unit-mocha').should('exist')
  })

  it('check page for essential links', () => {
    cy.visit('/')
    cy.contains('div.hello h3', 'Essential Links').should('exist')

    cy.contains('div.hello ul li a', 'Core Docs').should('exist')

    cy.contains('div.hello ul li a', 'Forum').should('exist')

    cy.contains('div.hello ul li a', 'Community Chat').should('exist')

    cy.contains('div.hello ul li a', 'Twitter').should('exist')

    cy.contains('div.hello ul li a', 'News').should('exist')

  })

  let ecoSysteem = new Array(
    'vue-router',
    'vuex',
    'vue-devtools',
    'vue-loader',
    'awesome-vue'
  )

  it('check page for Ecosystem', () => {
    cy.visit('/')
    let divHello = cy.get('div.hello')
    
    divHello.contains('h3', 'Ecosystem').should('exist')

    ecoSysteem.forEach(item => cy.contains('div.hello ul li a', item).should('exist'))
  })
})
