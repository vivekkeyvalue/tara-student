import { Button } from '@components';
import HomeworkLabel from '../homework-label/HomeworkLabel';

const HomeworkDetails = ({ details, onClose, onStart }: any) => (
  <div className="p-10">
    <HomeworkLabel label="yet_to_start" size="large" />
    <div className="my-4 text-3xl font-bold">{details.title}</div>
    <div className="mb-4 flex gap-2">
      <div className="text-grey20 basis-1/4 font-semibold">Topics</div>
      <div>{details.topics}</div>
    </div>
    <div className="mb-4 flex gap-2">
      <div className="text-grey20 basis-1/4 font-semibold">Skills</div>
      <div>{details.skills}</div>
    </div>
    <div className="mb-6 flex gap-2">
      <div className="text-grey20 basis-1/4 font-semibold">Expired by</div>
      <div>{details.expiry}</div>
    </div>
    <div className="flex justify-start gap-4">
      <Button label="Close" variant="secondary" handleClick={onClose} />
      <Button label="Start Homework" handleClick={onStart} />
    </div>
  </div>
);
export default HomeworkDetails;
