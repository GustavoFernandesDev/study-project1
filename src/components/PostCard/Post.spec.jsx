/* eslint-disable no-undef */
import React from 'react';
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';
import { render, screen } from '@testing-library/react';

const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
