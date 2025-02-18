// cypress/integration/componentes/Verify.spec.js

describe('Componente Verify', () => {
  
    beforeEach(() => {
      // Aquí se puede agregar la configuración antes de cada prueba, como visitar la página
      cy.mount(<Verify />); // Si usas Cypress con "cypress-react-unit-test"
    });
  
    it('Debe mostrar el icono de retroceso', () => {
      cy.get('.self-start') // Seleccionamos el contenedor que contiene el icono
        .find('svg') // Verificamos si hay un elemento svg dentro (el icono IoIosArrowRoundBack)
        .should('exist'); // El icono debe existir
    });
  
    it('Debe mostrar el título "Verification"', () => {
      cy.get('h1').contains('Verification'); // Verificamos que el h1 tenga el texto 'Verification'
    });
  
    it('Debe mostrar el texto de la verificación', () => {
      cy.get('h4').contains('We have sent you an email with an OTP'); // Verificamos que el texto de la verificación esté presente
    });
  
    it('Debe renderizar el componente NumberInput', () => {
      cy.get('input') // Asumimos que el NumberInput genera un campo de entrada
        .should('exist') // El campo de entrada debe existir
        .and('have.length', 6); // Verificamos que tenga 6 campos (si es que NumberInput está creando 6 entradas)
    });
  
    it('Debe mostrar el texto "Resend on: 00:32"', () => {
      cy.get('h2').contains('Resend on: 00:32'); // Verificamos que el texto con el tiempo de reenvío esté presente
    });
  
    it('Debe mostrar el botón "Complete"', () => {
      cy.get('button').contains('Complete') // Verificamos que el botón con el texto "Complete" esté presente
        .should('be.visible'); // El botón debe ser visible
    });
  
  });
  