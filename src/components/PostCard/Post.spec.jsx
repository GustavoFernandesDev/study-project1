import { PostCard } from '.';
import { PostCardPropsMock } from './mock';
import { render, screen } from '@testing-library/react';

const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', {name: /title 1/i })).toBeInTheDocument();
  });
});