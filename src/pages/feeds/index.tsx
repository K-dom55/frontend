import { ArticleListDTO, getArticleList, getSearchArticleList } from '@/api/article';
import FeedTemplate from '@/components/templates/Feed';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Feeds() {
  const [articleList, setArticleList] = useState<ArticleListDTO[]>([]);
  const [isFinished, setFinished] = useState<boolean>(false);
  const [hasNoResult, setNoResult] = useState<boolean>(false);
  const router = useRouter();

  // const loadMore = (id: number) => {
  //   getArticleList(id, '', '').then((res) => {
  //     if (!res) setNoResult(true);
  //     else setArticleList((list) => [...list, ...res]);
  //   });
  // };

  const handleSearch = (value: string) => {
    // reset state
    setArticleList([]);
    setFinished(false);
    setNoResult(false);

    getSearchArticleList(value)
      .then((res) => setArticleList(res))
      .catch((e: Error) => {
        console.error(e.message);
        setNoResult(true);
      });
  };

  const handleClick = (id: number) => {
    const [article] = articleList.filter((target) => target.id === id);

    const dto = JSON.stringify(article);
    router.push(`/result?dto=${dto}`);
  };

  // init articles
  useEffect(() => {
    getArticleList()
      .then((res) => setArticleList(res))
      .catch((e: Error) => {
        console.error(e.message);
        setNoResult(true);
      });
  }, []);

  // init observer
  useEffect(() => {
    if (!articleList) return;
    const target = articleList[articleList.length - 1];
  }, [articleList]);

  return (
    <>
      <FeedTemplate
        articleList={articleList ?? null}
        hasNoResult={hasNoResult}
        onSearch={handleSearch}
        onClick={handleClick}
      />
    </>
  );
}
