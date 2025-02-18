import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // 📌 Importa jest-dom para evitar el error

import Verify from "../components/Verify"; 

// 🔹 Mock del componente NumberInput para evitar errores de importación
vi.mock("../components/ui/NumberInput", () => ({
  NumberInput: () => <input data-testid="number-input" />,
}));

describe("Verify Component", () => {
  it("debe renderizar correctamente", () => {
    render(<Verify />);

    // 📌 Verifica que el título se renderiza
    expect(screen.getByText("Verification")).toBeInTheDocument();

    // 📌 Verifica que el mensaje de instrucciones se renderiza
    expect(
      screen.getByText(/We have sent you an email with an OTP/i)
    ).toBeInTheDocument();

    // 📌 Verifica que el input OTP se renderiza
    expect(screen.getByTestId("number-input")).toBeInTheDocument();

    // 📌 Verifica que el botón 'Complete' se renderiza
    expect(screen.getByRole("button", { name: /complete/i })).toBeInTheDocument();

    // 📌 Verifica que el temporizador de reenvío se renderiza
    expect(screen.getByText(/Resend on:/i)).toBeInTheDocument();
  });

  it("debe permitir hacer clic en el botón 'Complete'", async () => {
    render(<Verify />);
    
    const button = screen.getByRole("button", { name: /complete/i });
    await userEvent.click(button);

    expect(button).toBeInTheDocument(); // Confirma que el botón sigue presente después del clic
  });
});
