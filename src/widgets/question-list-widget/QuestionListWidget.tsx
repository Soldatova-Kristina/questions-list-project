import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem/QuestionItem";
import { usePagination } from "@/features/pagination/usePagination";
import { getTotalPages } from "@/shared/lib/pagination/getTotalPages";
import { Pagination } from "@/shared/ui/Pagination";

import styles from "./QuestionListWidget.module.css";
import { QuestionListSkeleton } from "./QuestionListWidget.skeleton";

const LIMIT = 10;

export function QuestionListWidget() {
  const { currentPage, setPage, searchParams } = usePagination();

  const params = {
    page: currentPage,
    limit: LIMIT,
    title: searchParams.get("title") || undefined,
    skills: searchParams.get("skills") ?? undefined,
    specializationId: searchParams.get("specializationId")
      ? Number(searchParams.get("specializationId"))
      : undefined,
    complexity: searchParams.get("complexity") ?? undefined,
    rate: searchParams.get("rate") ?? undefined,
  };

  const { data, isLoading } = useGetQuestionQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <QuestionListSkeleton />;
  }

  if (!data?.data.length) {
    return <div>Вопросов пока нет</div>;
  }

  const totalPages = getTotalPages(data.total, LIMIT);

  return (
    <div className={styles["question-list"]}>
      <h1 className={styles["question-list__title"]}>Список вопросов</h1>
      <div className={styles["question-list__list"]}>
        {data.data.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}
