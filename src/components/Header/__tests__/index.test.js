// import { render } from '@testing-library/react';
import Header from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('NavBar', () => {
  it('should render the NavBar component', async () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
