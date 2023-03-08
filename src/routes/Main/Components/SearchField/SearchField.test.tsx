import { fireEvent, render, screen } from '@testing-library/react';
import SearchField from './SearchField';

describe('SearchField', () => {
  const onSearch = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('should render a search field', () => {
    render(<SearchField searchField="" onSearch={onSearch} />);

    const searchField = screen.getByLabelText('Search');
    expect(searchField).toBeInTheDocument();
  });

  it('should call onSearch after debouncing', () => {
    render(<SearchField searchField="" onSearch={onSearch} />);

    const searchField = screen.getByLabelText('Search');
    fireEvent.change(searchField, { target: { value: 'search text' } });

    jest.advanceTimersByTime(600);
    expect(onSearch).toHaveBeenCalledWith('search text');
  });
});
