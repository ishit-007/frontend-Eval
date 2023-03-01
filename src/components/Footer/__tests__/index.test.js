import Footer from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Footer', () => {
  it('should render the Footer component', async () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
