import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterDetails from '../CharacterDetails';

describe("CharacterDetails test", () => {
  it('should render stuff', () => {
    expect(1 + 1).toEqual(2);
    const char1 = {
      birth: null,
      death: null,
      gender: null,
      name: 'Carl'
    }
    render(<CharacterDetails character={char1} />);
    const titleName = screen.getByText('Carl');
    expect(titleName).toBeInTheDocument();
  })
});