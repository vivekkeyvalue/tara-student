import { useState } from 'react';

import { TabPill } from '@types';
import { PAGINATION_LIMIT } from '@constants/generic';
import { homeworkTabs } from '@features/homeworks/constants';
import { Button, PageTitle, Pagination, SearchBar, Tabs } from '@components';
import HomeworkCard from '@features/homeworks/components/homework-card/HomeworkCard';

const HomeWorks = () => {
  const homeworkCards = [];

  const [selectedTab, setSelectedTab] = useState<TabPill>(homeworkTabs[0]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalCount, setTotalCount] = useState<number>(50);

  const onSelectTab = (tab: TabPill) => {
    setSelectedTab(tab);
  };

  const handleSearchBarChange = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    homeworkCards.push(
      <HomeworkCard
        key={i} // Adding a unique key for each HomeworkCard
        status="yet_to_start"
        title="Multiple operations involving all four operations dsfsdf sdfdsfsdf dfsdfdf dfaafds dfsfd dfsdf sdfdsf dfsdf dafdf  df sf sdf sdf sdf "
        subject="Maths"
      />
    );
  }

  // Render the array of HomeworkCard components inside JSX
  return (
    <>
      <PageTitle title="Homeworks" />
      <div className="mt-6 flex items-center justify-between">
        <div>
          <Tabs
            tabs={homeworkTabs}
            selectedTab={selectedTab}
            onTabSelect={onSelectTab}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <SearchBar
            placeholder="Search Homeworks"
            onSearch={handleSearchBarChange}
            value={searchValue}
          />
          <Button
            variant="tertiary"
            handleClick={() => {}}
            size="medium"
            leftIconName="filter"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-12 gap-y-8">
        {homeworkCards}
      </div>
      <div className="my-6 flex items-center justify-end">
        <Pagination
          page={page}
          setPage={setPage}
          totalCount={totalCount}
          limit={PAGINATION_LIMIT}
        />
      </div>
    </>
  );
};

export default HomeWorks;
