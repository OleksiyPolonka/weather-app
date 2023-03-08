import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CityPanel from './CityPanel';

const city = {
  matching_full_name: 'simple name',
  _embedded: {
    'city:item': {
      full_name: 'simple name',
      name: 'simple name',
      _links: {
        'city:timezone': {
          href: 'simple_href',
        },
      },
    },
  },
  _links: {
    'city:item': {
      href: 'simple_href',
    },
  },
};

describe('CityPanel', () => {
  it('renders the city name', () => {
    render(
      <MemoryRouter>
        <CityPanel city={city} />
      </MemoryRouter>,
    );
    const cityName = screen.getByText(city._embedded['city:item'].full_name);
    expect(cityName).toBeInTheDocument();
  });

  it('renders the link to the city details page', () => {
    render(
      <MemoryRouter>
        <CityPanel city={city} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', {
      name: city._embedded['city:item'].full_name,
    });
    expect(link.getAttribute('href')).toEqual(
      `/details/${city._embedded['city:item'].name}`,
    );
  });
});
