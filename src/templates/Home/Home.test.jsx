/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('<home />', () => {
  it('should render search, posts and load more', () => {
    render(<Home />);
    screen.debug();
  });
});
