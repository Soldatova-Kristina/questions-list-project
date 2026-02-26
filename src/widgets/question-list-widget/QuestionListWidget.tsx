import { useState } from "react";

import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import { QuestionList } from "@/entities/question/ui/QuestionList";
import { getTotalPages } from "@/shared/lib/pagination/getTotalPages";
import { Pagination } from "@/shared/ui/Pagination";
import { Skeleton } from "@/shared/ui/Skeleton";

import styles from "./QuestionListWidget.module.css";

export function QuestionListWidget() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { data, isLoading } = useGetQuestionQuery({ page: currentPage, limit });

  const title = "Вопросы React, JavaScript";

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Skeleton width="100%" height={120} />
        <Skeleton width="100%" height={120} />
        <Skeleton width="100%" height={120} />
      </div>
    );
  }

  if (!data?.data.length) {
    return <div className={styles.empty}>Вопросов пока нет</div>;
  }

  const totalPages = getTotalPages(data.total, limit);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.list}>
        {data.data.map((question) => (
          <QuestionList key={question.id} question={question} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
