import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';
import { setCredentials, unsetAuthState } from '../authState/authStateSlice';

const { API_BASE_URL } = constants;

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/auth`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authState.authToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      // headers.set('Access-Control-Allow-Origin', '*');
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  // console.log(args); // request url, method, body
  // console.log(api); // signal, dispatch, getState()
  // console.log(extraOptions); //custom like {shout: true}

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery('auth/refresh', api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403 || refreshResult?.error?.status === 404) {
        refreshResult.error.data.message = 'Your login has expired. ';
        api.dispatch(unsetAuthState());
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Auth'],
  endpoints: builder => ({}),
  refetchOnMountOrArgChange: true,
});
