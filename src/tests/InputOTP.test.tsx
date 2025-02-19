import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { InputOTP } from "@/components/ui/InputOTP";
import { useState } from "react";
import { vi } from "vitest"; // Se importa vi de Vitest
import "@testing-library/jest-dom";

// Definimos las props esperadas por el componente InputOTP
interface InputOTPProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  textAlign?: "center" | "left" | "right";
  children?: React.ReactNode; // Hacemos opcional la propiedad children
}

// Componente Wrapper para probar cambios de estado
const InputOTPWrapper = ({ maxLength = 6, textAlign = "center" }: Partial<InputOTPProps>) => {
  const [value, setValue] = useState("");

  return (
    <InputOTP 
      value={value} 
      onChange={(val) => {
        console.log("Valor ingresado:", val); // Para depuración
        setValue(val);
      }} 
      maxLength={maxLength} 
      textAlign={textAlign} 
    >
      {/* Se pasa un children vacío para evitar errores de TypeScript */}
      {null}
    </InputOTP>
  );
};

// Limpia el DOM después de cada test
afterEach(cleanup);

describe("InputOTP Component", () => {

  test("Renderiza correctamente el componente", () => {
    render(<InputOTPWrapper />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Permite ingresar valores y actualiza el estado", () => {
    render(<InputOTPWrapper />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "123456" } });
    expect(input).toHaveValue("123456");
  });

  test("No permite más caracteres que el maxLength", () => {
    render(<InputOTPWrapper maxLength={4} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "123456" } });
    expect(input).toHaveValue("1234"); // Solo permite 4 caracteres
  });

  test("Llama a onChange cuando el usuario ingresa valores", () => {
    const mockOnChange = vi.fn();
    
    render(
      <InputOTP value="" onChange={mockOnChange} maxLength={6} textAlign="center">
        {null}  {/* ✅ Se agrega `children` vacío */}
      </InputOTP>
    );
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "7890" } });
  
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith("7890");
  });

  test("Se alinea correctamente según la prop textAlign", () => {
    render(<InputOTPWrapper textAlign="right" />);
    const input = screen.getByRole("textbox");
  
    // Obtener el estilo computado en lugar de usar `toHaveStyle`
    const computedStyle = window.getComputedStyle(input);
    expect(computedStyle.textAlign).toBe("right");
  });

});

