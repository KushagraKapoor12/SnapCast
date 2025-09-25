export type ApiFetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  expectJson?: boolean;
  bunnyType: "stream" | "storage";
};

export type VideoDetails = {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string;
  visibility: "public" | "private";
  duration?: number;
};

type BaseParams = {
  query?: string;
  filter?: string;
  page?: string;
};

export type SearchParams = {
  searchParams: BaseParams;
};