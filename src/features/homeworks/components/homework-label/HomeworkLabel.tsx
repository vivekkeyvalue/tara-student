import { HomeworkLabelProps } from 'types/homework';

const labelStyle = {
  yet_to_start: 'bg-blueLite text-blue border-blue border-2',
  in_progress: 'bg-orangeLite text-orange border-orange border-2',
  fininshed: 'bg-blue'
};

const sizeStyle = {
  small: 'rounded-3xl p-2',
  large: 'rounded-xl px-4 py-2'
};

// TODO: subjective to changes
const value = {
  yet_to_start: 'Yet to Start',
  in_progress: 'In Progress',
  fininshed: 'Finished'
};

const HomeworkLabel = ({
  size = 'small',
  label,
  className
}: HomeworkLabelProps) => (
  <div
    className={`${labelStyle[label]} w-fit  text-sm font-bold ${sizeStyle[size]} ${className}`}
  >
    {value[label]}
  </div>
);

export default HomeworkLabel;
