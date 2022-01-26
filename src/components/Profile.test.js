import React from "react";
import { render, fireEvent , cleanup } from "@testing-library/react";
import Profile from "./Profile";
import { act } from "react-dom/test-utils";

describe("profile test", () => {
  it("rendered profile", () => {
    const { getByTestId } = render(<Profile />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });
  it("rendered profile", () => {
    const { getByTestId } = render(<Profile />);
    const search = getByTestId("search");
    expect(search).toBeTruthy();
  });

  it("change on input", async() => {
    await act(async() => {
        const { getByTestId } = render(<Profile />);
        const search = getByTestId("search");
        const searchWord="munyiv"
        await fireEvent.change(search, { target: { value: searchWord } })

        // expect().tobe(searchWord)


    });
  });
});
