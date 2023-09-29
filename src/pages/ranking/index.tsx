import React, { useEffect, useState } from 'react';
import { Ranking as RankingTemplate } from '@/components/templates';
import { getArticleList } from '@/api/article';
import { ArticleListDTO } from '@/api/article';

export default function Ranking() {
  const [articleList, setArticleList] = useState<ArticleListDTO[]>([]);
  const [cursorId, setCursorId] = useState<undefined | number>();

  useEffect(() => {
    getArticleList(cursorId).then((res) => {
      setArticleList(res);
    });
  }, [cursorId]);

  const handleNext = (id: number) => {
    setCursorId(id);
  };

  return (
    <>
      <RankingTemplate list={articleList} handleNext={handleNext} />
    </>
  );
}
