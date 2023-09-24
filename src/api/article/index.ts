import { ApiResponseDTO, apiInstance } from '..';

export interface ArticleListDTO {
  id: number;
  target: string;
  title: string;
  content: string;
  imgUrl: string;
  linkUrl: string;
  keywords: string[];
  likeCount: number;
  likeRank?: number;
  createdAt: string;
}

export async function getArticleList(articleId?: number) {
  const res = await apiInstance.get<ApiResponseDTO<ArticleListDTO[]>>(
    `/articles${!articleId ? '' : `?param=${articleId}`}`,
  );

  if (!res.data.result) throw new Error(res.data.message);

  return res.data.result;
}

export async function getSearchArticleList(targetName: string, articleId?: number) {
  const res = await apiInstance.get<ApiResponseDTO<ArticleListDTO[]>>(
    `/articles/search?targetName=${targetName}${!articleId ? '' : `param=${articleId}`}`,
  );

  if (!res.data.result) throw new Error(res.data.message);

  return res.data.result;
}
