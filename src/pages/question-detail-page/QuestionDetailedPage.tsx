import { useNavigate, useParams } from "react-router-dom";

import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { QuestionDetailSkeleton } from "@/widgets/question-detail-widget/QuestionDetail.skeleton";
import { QuestionDetail } from "@/widgets/question-detail-widget/QuestionDetailWidget";
import { QuestionDetailSidebar } from "@/widgets/Sidebar/question-detail-sidebar-filter/QuestionDetailSidebar";
import { SidebarSkeleton } from "@/widgets/Sidebar/SidebarSkeleton.skeleton";

import styles from "./QuestionDetailPage.module.css";

function QuestionDetailedPage() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate("/");
  const { id } = useParams<{ id: string }>();
  const questionId = Number(id);

  const { data: question, isLoading } = useGetQuestionByIdQuery(questionId);

  if (!questionId) return <div>Некорректный id</div>;
  if (isLoading)
    return (
      <div className={styles["question-detail-page__skeleton"]}>
        <QuestionDetailSkeleton />
        <SidebarSkeleton variant="detail" />
      </div>
    );
  if (!question) return <div>Вопрос не найден</div>;

  return (
    <div className={styles["question-detail-page"]}>
      <div className={styles["question-detail-page__back"]}>
        <Button variant="text" onClick={(handleGoBack)}>
          <Icon name="arrow-left" />
          Назад
        </Button>
      </div>
      <QuestionDetail question={question} />
      <QuestionDetailSidebar question={question} />
    </div>
  );
}

export { QuestionDetailedPage as Component };
export default QuestionDetailedPage;
