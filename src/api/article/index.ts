import { ApiResponseDTO } from '..';

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
}

export interface ArticleListResultDTO {
  getArticleDetails: ArticleListDTO[];
}
