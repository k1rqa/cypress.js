describe('TEST QA STUDIO', function () {
    
    it('TEST QA STUDIO', function () {
        cy.visit('https://test.qa.studio/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://test.qa.studio/');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Кирилл');
        cy.get('#billing_last_name').type('Адаменков');
        cy.get('#billing_address_1').type('Менжинского 23к1');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Московская область');
        cy.get('#billing_postcode').type('248012');
        cy.get('#billing_phone').type('+79029321122');
        cy.get('#billing_email').type('kiryambos@mail.ru');
        cy.get('#place_order').click();

        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
    })
})
