import React from "react";
import { render } from "@testing-library/react";
import Video from "./Video";

describe("Video tests", () => {
  it("should render", () => {
    expect(render(<Video />)).toBeTruthy();
  });
});
