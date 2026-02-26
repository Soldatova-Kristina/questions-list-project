import { baseApi } from "@/shared/api/baseApi";
import { normalizeParams } from "@/shared/lib/utils/normalizeParams";

import type {
  GetQuestionSpecializationResponse,
  GetSpecializationParams,
} from "../model/specialization.types";

const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecialization: build.query<GetQuestionSpecializationResponse, GetSpecializationParams>({
      query: (params) => ({
        url: "/specializations",
        params: normalizeParams(params),
      }),
      providesTags: ["Specialization"],
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
