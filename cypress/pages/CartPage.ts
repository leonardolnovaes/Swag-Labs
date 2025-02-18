import CartElements from "./elements/CartElements";

class CartPage {    
    addProductToCart() {
        cy.get(CartElements.inventoryItem).find("button").contains("Add to cart").click();
        return this;
    }
    
    removeProductFromCart() {
        cy.get(CartElements.inventoryItem).find("button").contains("Remove").click();
        return this;
    }
    
    validateCartBadge(expectedValue: string) {
        cy.get(CartElements.cartBadge).should("have.text", expectedValue);
        return this;
    }
    validateCartBadgeEmpty() {
        cy.get(CartElements.cartBadge).should("not.exist");
        return this;
    }
}

export default new CartPage();
