import { baseApi } from "@/shared/api/baseApi";

import type { QuestionSkill, GetQuestionSkillResponse, GetQuestionSkillParams } from "../model/skill.types";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkill: build.query<GetQuestionSkillResponse, GetQuestionSkillParams>({
      query: ({ page = 1, limit = 10, specializations }) => ({
        url: '/skills',
        params: {
          page,
          limit,
          ...(specializations && { specializations }),
        },
      }),
      providesTags: ['Skill'],
    }),
    getSkillById: build.query<{ data: QuestionSkill }, number>({
      query: (id) => `/skills/${id}`,
      providesTags: (result, error, id) => [{ type: 'Skill', id }],
    }),
  }),
});

export const { useGetSkillQuery, useGetSkillByIdQuery } = skillApi;
