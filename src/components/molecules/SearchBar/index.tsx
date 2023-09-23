import { KeyboardEvent, useRef, useState } from 'react';
import SearchImage from '@/assets/images/search_16.svg';
import { Theme, css, useTheme } from '@emotion/react';

interface Props {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: Props) {
  const [value, setValue] = useState('');
  const theme = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const style = {
    container: (theme: Theme) => css`
      border-bottom: 1px solid ${theme.gray400};
      display: flex;
      justify-content: space-between;
      padding: 16px 16px 16px 8px;
    `,
    input: (theme: Theme) => css`
      appearance: none;
      outline: none;
      border: none;
      background: inherit;
      width: 80%;

      &::placeholder {
        color: ${theme.gray400};
      }
    `,
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
      inputRef?.current?.blur();
    }
  };

  return (
    <div css={style.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        css={[theme.body2, style.input]}
        ref={inputRef}
      />
      <span
        onClick={() => {
          onSearch?.(value);
          spanRef?.current?.blur();
        }}
        ref={spanRef}
      >
        <SearchImage />
      </span>
    </div>
  );
}
