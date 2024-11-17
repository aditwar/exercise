import { CardBlog } from "./card";

describe("<CardBlog />", () => {
  it("render component card blog", () => {
    // ini untuk meniru
    cy.mount(
      <CardBlog
        title="PASTI SUKSES"
        author="Aditya"
        email="adit@gmail.com"
        image=""
        avatar=""
        slug=""
      />
    );
    // ini untuk mengetes ini, yg sudah didefine sebelumnya
    cy.get('[data-cy="blog-title"]')
      .should("exist") // ini bener kerender nda
      .and("be.visible")
      .contains("PASTI SUKSES"); // ini bener tulisannya itu?
  });
});
