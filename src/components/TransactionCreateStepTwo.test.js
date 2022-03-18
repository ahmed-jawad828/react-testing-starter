import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// eslint-disable-next-line prettier/prettier
test('on intial render, the pay button is render  ', async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  console.log(screen.getByRole("button", { name: "/pay/i" }));
  // expect(await screen.findByRole("button", { name: "/pay/i" })).toBeDisabled();
  // screen.debug();
});
