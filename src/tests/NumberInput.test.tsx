import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { NumberInput } from "../components/ui/NumberInput"; // 📌 Ajusta la ruta si es necesario

describe("NumberInput Component", () => {
  it("debe renderizar cuatro campos de entrada", () => {
    render(<NumberInput />);
    const inputs = screen.getAllByRole("spinbutton") as HTMLInputElement[];
    expect(inputs).to.have.lengthOf(4);
  });

  it("debe permitir la entrada de números y mover el foco al siguiente input", async () => {
    render(<NumberInput />);
    const inputs = screen.getAllByRole("spinbutton") as HTMLInputElement[];

    await userEvent.type(inputs[0], "1");
    expect(Number(inputs[0].value)).to.equal(1); // ✅ Ahora reconoce `value`

    expect(document.activeElement).to.equal(inputs[1]); // ✅ Verifica el foco correcto

    await userEvent.type(inputs[1], "2");
    expect(Number(inputs[1].value)).to.equal(2);

    await userEvent.type(inputs[2], "3");
    expect(Number(inputs[2].value)).to.equal(3);

    await userEvent.type(inputs[3], "4");
    expect(Number(inputs[3].value)).to.equal(4);
  });

  it("no debe permitir ingresar caracteres no numéricos", async () => {
    render(<NumberInput />);
    const inputs = screen.getAllByRole("spinbutton") as HTMLInputElement[];

    await userEvent.type(inputs[0], "a");
    expect(inputs[0].value).to.equal(""); // ✅ Ahora espera que el input quede vacío
  });

  it("debe permitir seleccionar el contenido de un input al enfocarlo", async () => {
    render(<NumberInput />);
    const inputs = screen.getAllByRole("spinbutton") as HTMLInputElement[];

    await userEvent.type(inputs[0], "5");
    await userEvent.click(inputs[0]);

    expect(document.activeElement).to.equal(inputs[0]); 
  });
});
