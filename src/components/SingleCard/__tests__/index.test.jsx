import SingleCard from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Single Card', () => {
  it('should render the Single Card Component', async () => {
    const tree = renderer.create(<SingleCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
