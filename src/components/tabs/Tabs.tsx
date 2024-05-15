import { TabProps } from '@types';

const Tabs = ({ tabs, onTabSelect, selectedTab, className }: TabProps) => (
  <div className={`flex gap-4 ${className || ''}`}>
    {tabs?.map((tab) => (
      <div
        role="presentation"
        className="min-w-180 flex cursor-pointer flex-col"
        key={tab.id}
        onClick={() => {
          onTabSelect?.(tab);
        }}
      >
        <div
          className={`table-cell truncate py-1 text-center text-base font-medium ${
            selectedTab?.id === tab.id ? 'text-primary' : 'text-content'
          }`}
          key={tab.id}
        >
          {tab.label}
        </div>
        <div
          className={`relative top-0.5 border-b-2 border-primary ${
            selectedTab?.id !== tab.id && 'invisible'
          }`}
        />
      </div>
    ))}
  </div>
);

export default Tabs;
