import React from 'react';
import AllCards from '..';
import renderer from 'react-test-renderer';
describe('AllCards', () => {
  it('should render the AllCards component', async () => {
    const tree = renderer.create(<AllCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
