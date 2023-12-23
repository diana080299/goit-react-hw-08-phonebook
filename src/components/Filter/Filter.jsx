import { useDispatch, useSelector } from 'react-redux';

import { Box, Heading, Input } from '@chakra-ui/react';
import { filterSet, selectFilter } from 'store/myFilterSlice';

export const Filter = props => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter);

  const handleFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };
  return (
    <Box paddingLeft="15px">
      <Heading as="h4" size="mb" marginBottom="20px">
        Find contacts by name
      </Heading>
      <Input
        variant="filled"
        type="text"
        name="name"
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        placeholder="Search your name"
        value={filterName}
        maxWidth="320px"
      />
    </Box>
  );
};
