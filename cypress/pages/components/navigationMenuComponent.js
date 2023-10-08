export class NavigationMenu {
  elements = {
    menuItem: (menuTitleName) => cy.get(`[title='${menuTitleName}']`),
  };

  openMenuItemByValue(menuTitleName) {
    this.elements.menuItem(menuTitleName).click();
  }
}
