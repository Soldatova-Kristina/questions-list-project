import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import { usePagination } from "@/features/pagination/usePagination";
import { QuestionListWidget } from "@/widgets/question-list-widget/QuestionListWidget";
import { QuestionListSkeleton } from "@/widgets/question-list-widget/QuestionListWidget.skeleton";
import QuestionListSidebar from "@/widgets/Sidebar/question-list-sidebar-filter/QuestionListSidebar";
import { SidebarSkeleton } from "@/widgets/Sidebar/SidebarSkeleton.skeleton";

import styles from "./QuestionMainPage.module.css";

const LIMIT = 10;

function QuestionMainPage() {
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

  const { data, isLoading } = useGetQuestionQuery(params);

  return (
    <div className={styles["question-main-page"]}>
      {isLoading ? (
        <>
          <QuestionListSkeleton />
          <SidebarSkeleton variant="list" />
        </>
      ) : (
        <>
          <QuestionListWidget
            data={data}
            currentPage={currentPage}
            onPageChange={setPage}
            limit={LIMIT}
          />
          <QuestionListSidebar />
        </>
      )}
    </div>
  );
}

export { QuestionMainPage as Component };
export default QuestionMainPage;
