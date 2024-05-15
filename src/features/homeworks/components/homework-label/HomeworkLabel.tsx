import { HomeworkLabelProps } from 'types/homework';

const labelStyle = {
  yet_to_start: 'bg-blueLite text-blue border-blue border-2',
  in_progress: 'bg-orangeLite text-orange border-orange border-2',
  fininshed: 'bg-blue'
};

// TODO: subjective to changes
const value = {
  yet_to_start: 'Yet to Start',
  in_progress: 'In Progress',
  fininshed: 'Finished'
};

const HomeworkLabel = ({ label }: HomeworkLabelProps) => (
  <div
    className={`${labelStyle[label]} w-fit rounded-3xl p-2 text-sm font-bold`}
  >
    {value[label]}
  </div>
);

export default HomeworkLabel;
