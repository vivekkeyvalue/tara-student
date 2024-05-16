/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { TabPill } from '@types';
import Head from '@layouts/head/Head';
import Modal from '@layouts/modal/Modal';
import { PAGINATION_LIMIT } from '@constants/generic';
import { homeworkTabs } from '@features/homeworks/constants';
import { Button, PageTitle, Pagination, SearchBar, Tabs } from '@components';
import HomeworkCard from '@features/homeworks/components/homework-card/HomeworkCard';
import HomeworkDetails from '@features/homeworks/components/homework-details/HomeworkDetails';
// TODO: to be removed
import { homeworkDetails } from '@constants/dummydata';

const HomeWorks = () => {
  const homeworkCards = [];

  const [selectedTab, setSelectedTab] = useState<TabPill>(homeworkTabs[0]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(50);
  const [selectedHomework, setSelectedHomework] = useState<any>();

  const onSelectTab = (tab: TabPill) => {
    setSelectedTab(tab);
  };

  const handleSearchBarChange = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onHomeworkStartClick = () => {
    // TODO: to be updated
    console.log('Homework start click');
  };

  // TODO: to be removed
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    homeworkCards.push(
      <HomeworkCard
        key={i}
        details={homeworkDetails}
        handleSelect={() => {
          setIsModalOpen(true);
          setSelectedHomework(homeworkDetails);
        }}
      />
    );
  }

  return (
    <>
      <Head title="Homeworks" />
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} isCloseIconRequired={false}>
          <div className="size-full rounded-lg bg-theme">
            <HomeworkDetails
              details={selectedHomework}
              onClose={handleModalClose}
              onStart={onHomeworkStartClick}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default HomeWorks;
