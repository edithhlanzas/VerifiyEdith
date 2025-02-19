describe("App Component Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Debería mostrar el título de verificación correctamente", () => {
    cy.get("h1").should("contain", "Verification");
  });


  it("Debería mostrar el texto de verificación correctamente", () => {
    cy.get("h4").should("contain", "We have sent you an email with an OTP");
});

  it("Debería mostrar el componente NumberInput correctamente", () => {
    cy.get("input[type='number']").should("exist");
  });

  it("Debería mostrar el temporizador de reenvío correctamente", () => {
    cy.get("h2").should("contain", "Resend on:");
  });

  it("Debería mostrar el botón de completar correctamente", () => {
    cy.get("button").should("contain", "Complete");
  });

  it("Debería mostrar el icono de flecha hacia atrás correctamente", () => {
    cy.get("span.self-start").should("exist");
    cy.get("span.self-start").find("svg.w-7.h-7").should("exist");
  });
});