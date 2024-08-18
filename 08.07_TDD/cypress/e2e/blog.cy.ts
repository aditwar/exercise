describe('E2E Blog', () => {

    // Render... itu judulnya
    it('Render content and redirect to detail', () => {

    // ini masuk ke HOME
      cy.visit('/')

    // blog-item ini ada 3 dan first brarti ambil yg pertama
      cy.get('[data-cy="blog-item"]').first()

    // ini dicari yg namanya blog-redirect
        .find('[data-cy="blog-redirect"]').click()
    
    // ini url harus ada kata blog nya dan ada tambahan dibelakang nya apa
      cy.url().should('match', /\/blog\/.+/)
    })
  })