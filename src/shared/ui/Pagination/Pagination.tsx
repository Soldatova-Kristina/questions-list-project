import clsx from "clsx";

import { getVisiblePages } from "@/shared/lib/pagination/getVisiblePages";

import { Icon } from "../Icon";

import styles from "./Pagination.module.css";
import type { PaginationProps } from "./Pagination.types";

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = getVisiblePages(currentPage, totalPages);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={clsx(styles.pagination, className)}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        <Icon name="arrow_btn-left" />
      </button>
      {pages.map((page, index) => {
        if (page === "ellipsis") {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }
        return (
          <button
            key={page}
            className={clsx(styles.page, page === currentPage && styles.active)}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        <Icon name="arrow_btn-right" />
      </button>
    </div>
  );
}
