"use client";
import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
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
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <p className={styles.font}>&lt;</p>
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={styles.paginationButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <p className={styles.font}>&gt;</p>
      </button>
    </div>
  );
};
