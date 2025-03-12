import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';

describe("MovieCard test", () => {
  it('should render stuff', () => {
    render(<MovieCard title={'Movie'} year={2000} imdbUrl={'link'} />);
    const movieName = screen.getByText('Movie');
    expect(movieName).toBeInTheDocument();
  })
});