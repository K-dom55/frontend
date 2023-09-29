import React, { useState } from 'react';
import { Ranking } from '@/components/organisms';
import { RankingTabType } from '@/components/organisms/Ranking/Tabs';
import { css } from '@emotion/react';
import { ArticleListDTO } from '@/api/article';

interface Props {
  list: ArticleListDTO[];
  handleNext: (id: number) => void;
}

export default function Template({ list, handleNext }: Props) {
  const [type, setType] = useState(RankingTabType.Article);

  const handleChangeType = (targetType: RankingTabType) => {
    setType(targetType);
  };

  return (
    <div>
      <Ranking.Header />
      <Ranking.Tabs type={type} handleChangeType={handleChangeType} />
      <div
        css={css`
          padding: 24px 20px 0;
        `}
      >
        <Ranking.Chart />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 24px 0;
          `}
        >
          {list.map((props) => (
            <Ranking.ListItem key={props.id} type={type} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
