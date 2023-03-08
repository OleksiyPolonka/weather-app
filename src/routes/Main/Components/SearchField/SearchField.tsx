import { TextField } from '@mui/material';
import debouce from 'lodash.debounce';
import { useEffect, useMemo } from 'react';
import { SearchComponentProps } from './types';

const SearchComponent = ({ searchField, onSearch }: SearchComponentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => debouce(handleChange, 500), []);

  useEffect(() => () => debouncedResults.cancel());

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      defaultValue={searchField}
      onChange={debouncedResults}
      InputProps={{ style: { color: '#fff', cursor: 'text' } }}
    />
  );
};

export default SearchComponent;
