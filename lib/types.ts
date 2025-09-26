export type ApiFetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData | Record<string, unknown>;
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

export type VideoWithUser = {
  video: {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    videoId: string;
    thumbnailUrl: string;
    visibility: "public" | "private";
    userId: string;
    views: number;
    duration: number | null;
    createdAt: Date;
    updatedAt: Date;
  };
  user: {
    id: string;
    name: string;
    image: string | null;
  } | null;
};