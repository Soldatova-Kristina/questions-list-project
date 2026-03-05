import QuestionListSidebar from "@/widgets/question-list-sidebar-filter/QuestionListSidebar";
import { QuestionListWidget } from "@/widgets/question-list-widget/QuestionListWidget";

import styles from "./QuestionMainPage.module.css";

function QuestionMainPage() {
  return (
    <div className={styles["question-main-page"]}>
      <QuestionListWidget />
      <QuestionListSidebar />
    </div>
  );
}

export { QuestionMainPage as Component };
export default QuestionMainPage;
