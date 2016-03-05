import React from 'react';
import ReactDOM from 'react-dom';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

import {expect} from 'chai';

import App from '../../src/components/app';

describe('Search', () => {
  it('has an empty initial value', () => {
    const component = renderIntoDocument(<App />);
    const search = findRenderedDOMComponentWithTag(component, 'input');
    expect(search.value).to.equal('');
  });
});
