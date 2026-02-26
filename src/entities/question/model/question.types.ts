import type { QuestionSkill } from "@/entities/skill/model/skill.types";
import type { QuestionSpecialization } from "@/entities/specialization/model/specialization.types";

export interface Question {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
}

export interface GetQuestionResponse {
  total: number;
  page: number;
  limit: number;
  data: Question[];
}

export interface GetQuestionParams {
  page?: number;
  limit?: number;
  title?: string;
  titleOrDescription?: string;
  skills?: string;
  skillFilterMode?: "ALL" | "ANY";
  topics?: string;
  complexity?: string;
  collection?: number;
  rate?: string;
  keywords?: string;
  specializationId?: number;
  specializationSlug?: string;
  order?: "ASC" | "DESC";
  random?: boolean;
}
