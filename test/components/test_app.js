import React from 'react';
import ReactDOM from 'react-dom';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

import {expect} from 'chai';

import App from '../../src/components/app';

describe('App', () => {
  it('has a search box that is auto focused with an empty inital value', () => {
    const component = renderIntoDocument(<App />);
    const searchBox = findRenderedDOMComponentWithTag(component, 'input');
    expect(searchBox).to.equal(document.activeElement);
    expect(searchBox.value).to.equal('');
  });
});
