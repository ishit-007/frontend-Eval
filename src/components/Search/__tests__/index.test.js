import Search from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Search', () => {
  it('should render the Search Component', async () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
