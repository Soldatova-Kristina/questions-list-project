import { baseApi } from "@/shared/api/baseApi";
import { normalizeParams } from "@/shared/lib/utils/normalizeParams";

import type {
  Question,
  GetQuestionResponse,
  GetQuestionParams,
} from "../model/question.types";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestion: builder.query<GetQuestionResponse, GetQuestionParams>({
      query: (params) => ({
        url: "/questions/public-questions",
        params: normalizeParams(params),
      }),
      providesTags: ['Question'],
    }),
    getQuestionById: builder.query<Question, number>({
      query: (id) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionQuery, useGetQuestionByIdQuery } = questionApi
