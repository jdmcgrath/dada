import React from "react";
import { render } from "@testing-library/react";
import Article from "./Article";

describe("Article tests", () => {
  it("should render", () => {
    expect(render(<Article />)).toBeTruthy();
  });
});
