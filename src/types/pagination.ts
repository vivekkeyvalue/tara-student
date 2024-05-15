export interface CustomPaginationProps {
  totalCount: number;
  limit: number;
  page: number;
  setPage: (arg: number) => void;
}

export interface PageIndicatorProps {
  page: number;
  totalCount: number;
  limit: number;
}
