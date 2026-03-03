import { useParams } from "react-router-dom";

import { QuestionDetail } from "@/widgets/question-detail-widget/QuestionDetailWidget";

function QuestionDetailedPage() {
  const { id } = useParams<{ id: string }>();
  const questionId = Number(id);

  if (!questionId) return <div>Некорректный id</div>;

  return (
    <>
      <QuestionDetail questionId={questionId} />
    </>
  );
}

export { QuestionDetailedPage as Component };
export default QuestionDetailedPage;
