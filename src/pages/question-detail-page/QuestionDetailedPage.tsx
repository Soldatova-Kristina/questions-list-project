import { useNavigate, useParams } from "react-router-dom";

import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { QuestionDetailSidebar } from "@/widgets/question-detail-sidebar-filter/QuestionDetailSidebar";
import { QuestionDetailSkeleton } from "@/widgets/question-detail-widget/QuestionDetail.skeleton";
import { QuestionDetail } from "@/widgets/question-detail-widget/QuestionDetailWidget";

import styles from "./QuestionDetailPage.module.css";



function QuestionDetailedPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const questionId = Number(id);

  const { data: question, isLoading } = useGetQuestionByIdQuery(questionId);

  if (!questionId) return <div>Некорректный id</div>;
  if (isLoading) return <QuestionDetailSkeleton />;
  if (!question) return <div>Вопрос не найден</div>;

  return (
    <div className={styles["question-detail-page"]}>
      <div className={styles["question-detail-page__back"]}>
        <Button variant="text" onClick={() => navigate(-1)}>
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
