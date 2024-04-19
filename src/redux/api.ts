// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Movie} from '../types/models/Movie';
import type {MovieDetails} from '../types/models/MovieDetails';
const baseURL = 'https://api.themoviedb.org/3/';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      // Add the token to the headers
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWFiMmQ2OWVmZGYwZGVlYTc3MWI5MzJhMWI5ZTUwMyIsInN1YiI6IjY0NjVmZWJkMDA2YjAxMDEyNmY0YTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDcGrsO1STnfN2MErlzUK5b6Sn2b8dZ_Foh6Ctzm9CA',
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getMovies: builder.query<Movie[], number>({
      query: page => {
        console.log('🚀 -> file: api.ts:24 -> page:', page);
        return `discover/movie?language=en-US&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),
    getSeries: builder.query<Movie[], number>({
      query: page => {
        console.log('🚀 -> file: api.ts:24 -> page:', page);
        return `discover/tv?language=en-US&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),

    getTopPopular: builder.query<Movie[], number>({
      query: page => {
        console.log('🚀 -> file: api.ts:24 -> page:', page);
        return `/movie/top_rated?language=en-US&include_adult=false&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results.slice(0, 5);
      },
    }),
    getTopPopularShows: builder.query<Movie[], number>({
      query: page => {
        return `/tv/top_rated?language=en-US&include_adult=false&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results.slice(0, 5);
      },
    }),
    getDetails: builder.query<MovieDetails, {stype: string; id: number}>({
      query: ({stype, id}) => {
        if (stype === 'movie') {
          return `/movie/${id}?language=en-US`;
        } else {
          return `/tv/${id}?language=en-US`;
        }
      },
    }),
    search: builder.query<Movie[], {queryText: string}>({
      query: ({queryText}) => {
        return `/search/multi?query=${queryText}&language=en-US&include_adult=false&page=${1}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),

    getMovieTrailer: builder.query<string | null, {type: string; id: string}>({
      query: ({type, id}) => {
        if (type === 'movie') {
          return `/movie/${id}/videos?language=en-US`;
        } else {
          return `/tv/${id}/videos?language=en-US`;
        }
      },
      transformResponse: (response: any) => {
        const trialer = response.results.find(
          (item: any) =>
            item.type === 'Trailer' &&
            item.site === 'YouTube' &&
            item.official === true,
        );

        if (trialer) {
          return trialer.key;
        } else {
          return null;
        }
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useLazyGetMoviesQuery,
  useGetSeriesQuery,
  useLazyGetSeriesQuery,

  useGetTopPopularQuery,

  useGetTopPopularShowsQuery,

  useSearchQuery,

  useLazySearchQuery,
  useGetDetailsQuery,
  useGetMovieTrailerQuery,
} = api;
