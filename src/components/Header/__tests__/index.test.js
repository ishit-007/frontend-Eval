// import { render } from '@testing-library/react';
import Header from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Header', () => {
  it('should render the Header component', async () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
