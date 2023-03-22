import { render, screen } from "@testing-library/react";
import { countLetters } from "../../utils";

describe("Home", () => {
  it("renders a heading", () => {
    const testCase = "radar";
    const want = new Map<string, number>([
      ["a", 2],
      ["r", 2],
      ["d", 1],
    ]);
    const have = countLetters(testCase);
    expect(want).toEqual(have);
  });
});
