import React from "react";
import { render } from "@testing-library/react";
import bookSmarts from "./bookSmarts";

describe("bookSmarts tests", () => {
  it("should render", () => {
    expect(render(<bookSmarts />)).toBeTruthy();
  });
});
