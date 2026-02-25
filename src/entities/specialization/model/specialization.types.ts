export interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetQuestionSpecializationResponse {
  total: number;
  page: number;
  limit: number;
  data: QuestionSpecialization[];
}

export type GetSpecializationParams = {
  page?: number;
  limit?: number;
  authorId?: string;
  title: string;
};
