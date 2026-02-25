import type { QuestionSpecialization } from "@/entities/specialization/model/specialization.types";

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc?: string | null;
  createdAt?: string;
  updatedAt?: string;
  specializations?: QuestionSpecialization[];
}

export interface GetQuestionSkillResponse {
  total: number;
  page: number;
  limit: number;
  data: QuestionSkill[];
}

export interface GetQuestionSkillParams {
  page?: number;
  limit?: number;
  authorId?: string;
  specializations?: number[];
  title?: string;
}
