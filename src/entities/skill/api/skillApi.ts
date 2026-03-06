import { baseApi } from "@/shared/api/baseApi";
import { normalizeParams } from "@/shared/lib/utils/normalizeParams";

import type {
  QuestionSkill,
  GetQuestionSkillResponse,
  GetQuestionSkillParams,
} from "../model/skill.types";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkill: build.query<GetQuestionSkillResponse, GetQuestionSkillParams>({
      query: (params) => ({
        url: "/skills",
        params: normalizeParams({
          page: params.page || 1,
          limit: params.limit || 10,
          authorId: params.authorId,
          specializations: params.specializations,
          title: params.title,
        }),
      }),
      providesTags: ["Skill"],
    }),

    getSkillById: build.query<{ data: QuestionSkill }, number>({
      query: (id) => `/skills/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Skill", id }],
    }),
  }),
});

export const { useGetSkillQuery, useGetSkillByIdQuery } = skillApi;
