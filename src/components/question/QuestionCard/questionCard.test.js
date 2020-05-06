import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import QuestionCard from "./QuestionCard";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("QuestionCard Component", () => {
  const obj = {
    question: "Is it a question?",
    link: "http://www.google.com",
  };

  it('should exist', () => {
    expect(typeof QuestionCard).toBe('function');
  });

  it("should not render without data", () => {
    act(() => {
      render(<QuestionCard data={undefined} />, container);
    });
    expect(container.textContent).toContain("Nada para ser respondido!");
  });

  it("should have a question to be answered", () => {
    act(() => {
      render(<QuestionCard data={obj} />, container);
    });
    expect(container.textContent).toContain("Is it a question?");
  });

  it("should have a link to the proposition", () => {
    act(() => {
      render(<QuestionCard data={obj} />, container);
    });
    expect(container.querySelector(".proposition-link").href)
      .toContain("http://www.google.com");
  });
});
