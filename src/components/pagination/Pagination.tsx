import Pagination from '@mui/material/Pagination';

import { CustomPaginationProps } from 'types';

import theme from '../../../themes/colors';

const CustomPagination = ({
  totalCount,
  limit,
  page,
  setPage
}: CustomPaginationProps) => {
  const pageCount = Math.ceil(totalCount / limit);

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      color="standard"
      shape="rounded"
      className="text-grey"
      sx={{
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: theme.primary,
          color: theme.theme
        },
        '& .MuiPaginationItem-root': {
          backgroundColor: theme.theme,
          color: theme.content
        }
      }}
      count={pageCount}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default CustomPagination;
