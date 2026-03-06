// @/widgets/question-list-widget/QuestionListWidget.tsx
import type { GetQuestionResponse } from "@/entities/question/model/question.types";
import { QuestionItem } from "@/entities/question/ui/QuestionItem/QuestionItem";
import { getTotalPages } from "@/shared/lib/pagination/getTotalPages";
import { Pagination } from "@/shared/ui/Pagination";

import styles from "./QuestionListWidget.module.css";

interface QuestionListWidgetProps {
  data?: GetQuestionResponse;
  currentPage: number;
  onPageChange: (page: number) => void;
  limit: number;
}

export function QuestionListWidget({
  data,
  currentPage,
  onPageChange,
  limit,
}: QuestionListWidgetProps) {
  if (!data?.data || data.data.length === 0) {
    return <div className={styles["empty-state"]}>Вопросов пока нет</div>;
  }

  const totalPages = getTotalPages(data.total, limit);

  return (
    <div className={styles["question-list"]}>
      <h1 className={styles["question-list__title"]}>Список вопросов</h1>
      <div className={styles["question-list__list"]}>
        {data.data.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  );
}
