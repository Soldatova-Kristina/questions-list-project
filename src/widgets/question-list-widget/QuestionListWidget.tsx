import { useState } from "react";

import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import { QuestionCard } from "@/entities/question/ui/QuestionCard/QuestionCard";
import { getTotalPages } from "@/shared/lib/pagination/getTotalPages";
import { Pagination } from "@/shared/ui/Pagination";

import styles from "./QuestionListWidget.module.css";
import { QuestionListSkeleton } from "./QuestionListWidget.skeleton";

export function QuestionListWidget() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { data, isLoading } = useGetQuestionQuery({ page: currentPage, limit });

  const title = "Вопросы React, JavaScript";

  if (isLoading) {
    return <QuestionListSkeleton />;
  }

  if (!data?.data.length) {
    return <div>Вопросов пока нет</div>;
  }

  const totalPages = getTotalPages(data.total, limit);

  return (
    <div className={styles["question-list"]}>
      <h1 className={styles["question-list__title"]}>{title}</h1>

      <div className={styles["question-list__list"]}>
        {data.data.map((question) => (
          <QuestionCard key={question.id} question={question} />
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
