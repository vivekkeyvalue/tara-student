import { useEffect, useState } from 'react';

import { ReactComponent as SearchingIcon } from '@assets/icons/search.svg';

import Icon from '../icon/Icon';

interface SearchBarProps {
  placeholder: string;
  SearchIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onSearch: (searchQuery: string) => void;
  searchBarStyle?: string;
  iconStyle?: string;
  searchInputStyle?: string;
  value?: string;
  clearSearchInput?: any; // prop to clear the local searchText state
}

const SearchBar = ({
  placeholder,
  SearchIcon = SearchingIcon,
  onSearch,
  searchBarStyle,
  iconStyle,
  searchInputStyle,
  value,
  clearSearchInput
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>(value || '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchText);
    }
  };

  const handleSearchBarClear = () => {
    setSearchText('');
    onSearch('');
  };

  useEffect(() => {
    setSearchText(value || '');
  }, [value]);

  useEffect(() => {
    if (clearSearchInput) {
      handleSearchBarClear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearSearchInput]);

  return (
    <div className={`relative h-11 ${searchBarStyle || ''}`}>
      {SearchIcon && (
        <SearchIcon
          className={`absolute left-2.5 top-1/2 -translate-y-1/2 ${
            iconStyle && iconStyle
          }`}
        />
      )}
      <input
        value={searchText}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        className={`placeholder:text-text-grey size-full rounded-lg border py-2 pl-10 pr-4 text-sm focus:outline-none ${
          searchInputStyle || ''
        }`}
      />
      {searchText && (
        <div
          role="presentation"
          onClick={handleSearchBarClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <Icon name="close" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
