import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from './Main';
import { getCities } from '../../api/teleport';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../api/teleport', () => ({
  getCities: jest.fn(),
}));

describe('Main component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows a message if no cities are found', async () => {
    const getCitiesMock = getCities as jest.MockedFunction<typeof getCities>;
    getCitiesMock.mockResolvedValue([]);

    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'Invalid City' } });

    await waitFor(() => {
      expect(getCities).toHaveBeenCalledWith('Invalid City');
    });

    const message = screen.getByText(
      'Please, enter the city name in the search bar...',
    );
    expect(message).toBeInTheDocument();
  });
});
