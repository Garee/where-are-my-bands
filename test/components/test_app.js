import React from 'react';
import ReactDOM from 'react-dom';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

import {expect} from 'chai';

import App from '../../src/components/app';

describe('App', () => {
  it('has a heading', () => {
    const component = renderIntoDocument(<App />);
    const heading = findRenderedDOMComponentWithTag(component, 'h1');
    expect(heading.textContent).to.equal('Where are my bands?');
  });
});
