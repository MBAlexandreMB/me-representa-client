import React from 'react';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

import Question from './Question';
import QuestionCard from './QuestionCard/QuestionCard';

let container = null;
beforeEach(() => {
  // // setup a DOM element as a render target
  // container = document.createElement("div");
  // document.body.appendChild(container);
});

afterEach(() => {
  // // cleanup on exiting
  // unmountComponentAtNode(container);
  // container.remove();
  // container = null;
});

describe("Question Container Component", () => {
  it('should exist', () => {
    expect(typeof Question).toBe('function');
  });

  // it('should render a card', () => {
  //   const component = renderer.create(<Question />).toJSON();
  //   const card = renderer.create(<QuestionCard />);
  //   console.log(card.toJSON());
  //   expect(component).toMatchSnapshot();
  // });
});