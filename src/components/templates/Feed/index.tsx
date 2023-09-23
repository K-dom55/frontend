import { ArticleListDTO } from '@/api/article';
import HeartCount from '@/components/molecules/HeartCount';
import SearchBar from '@/components/molecules/SearchBar';
import { Feed } from '@/components/organisms/Feed';
import Navigation from '@/components/organisms/Navigation';
import { Theme, css, useTheme } from '@emotion/react';
import { useState } from 'react';

interface Props {
  articleList: ArticleListDTO[];
  hasNoResult: boolean;
  onSearch?: (value: string) => void;
}

export default function FeedTemplate({ articleList, hasNoResult, onSearch }: Props) {
  const style = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 0 20px;
      position: relative;
      margin-top: 48px;
    `,
    searchBarContainer: css`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    `,
    navigatorContainer: (theme: Theme) => css`
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 100;
      max-width: 440px;
      background: ${theme.background};
    `,
  };

  const theme = useTheme();

  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div css={style.container}>
      <div css={style.navigatorContainer}>
        <Navigation>효능 모아보기</Navigation>
      </div>
      <div css={style.searchBarContainer}>
        <SearchBar
          onSearch={(value) => {
            setSearchValue(value);
            onSearch?.(value);
          }}
          placeholder="제목이나 이름을 검색해주세요"
        />
      </div>
      {articleList.map((article) => (
        <Feed key={article.id}>
          <Feed.Image src={article.imgUrl} />
          <Feed.Spacer />
          <Feed.Title text={article.title} />
          <Feed.ChipContainer>
            {article.keywords.map((keyword, idx) => (
              <Feed.Chip key={idx} text={keyword} />
            ))}
          </Feed.ChipContainer>
          <Feed.Spacer />
          <Feed.LikeContainer>
            <HeartCount count={article.likeCount} />
            {article.likeRank ? `좋아요 ${article.likeRank}위` : '100위권 밖이에요'}
          </Feed.LikeContainer>
        </Feed>
      ))}
      <span css={[theme.body2, theme.gray500]}>
        {hasNoResult && `${searchValue}에 대한 검색 결과가 없어요 ㅠㅠ`}
      </span>
    </div>
  );
}
