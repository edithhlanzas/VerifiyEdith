import { render, screen } from "@testing-library/react";
import { InputOTPSeparator } from "@/components/ui/InputOTP";
import '@testing-library/jest-dom';  // Asegúrate de que esta importación esté presente

describe("InputOTP Component", () => {
  it("renders InputOTPSeparator correctly", () => {
    render(<InputOTPSeparator />);
    // El matchers toBeInTheDocument ahora debería funcionar
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
