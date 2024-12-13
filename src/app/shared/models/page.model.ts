export interface Page<T> {
    data: T[],
    totalCount: number
}

export interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }