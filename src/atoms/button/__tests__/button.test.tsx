import { render, screen, fireEvent } from '@testing-library/react';

import 'jest-styled-components';

import '@testing-library/jest-dom/extend-expect';

import { Button } from '../button';
import { ButtonTestEnum } from '../button-test.enum';

describe('Button Test', () => {
  it('button test exist', () => {
    render(<Button data-testid={ButtonTestEnum.MainButton} />);

    expect(screen.queryByTestId(ButtonTestEnum.MainButton)).not.toBeNull();
  });

  it('button test click', () => {
    const handleClick = jest.fn();

    render(<Button data-testid={ButtonTestEnum.MainButton} onClick={handleClick} />);

    fireEvent.click(screen.getByTestId(ButtonTestEnum.MainButton));

    expect(handleClick.mock.calls.length).toBe(1);
  });
});
