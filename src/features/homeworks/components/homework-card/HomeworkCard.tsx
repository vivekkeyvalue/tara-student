import { LabelVarient } from 'types/homework';
import backgroundImage1 from '@assets/images/card_bg_1.svg';
import backgroundImage2 from '@assets/images/card_bg_2.svg';
import backgroundImage3 from '@assets/images/card_bg_3.svg';
import backgroundImage4 from '@assets/images/card_bg_4.svg';

import HomeworkLabel from '../homework-label/HomeworkLabel';

interface HomeworkCardProps {
  status: string;
  title: string;
  subject: string;
}

const backgroundImages = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4
];

const getRandomBackgroundImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

const HomeworkCard = ({ status, title, subject }: HomeworkCardProps) => {
  const backgroundImage = getRandomBackgroundImage();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
      className="cursor-pointer rounded-lg bg-white px-4 pb-6 pt-4 shadow-lg md:w-[calc(33%-31px)] lg:w-[calc(25%-36px)]"
      style={backgroundStyle}
    >
      <HomeworkLabel label={status as LabelVarient} />
      <div className="truncate-multiline mb-1 mt-4 text-base font-semibold">
        {title}
      </div>
      <div className="text-sm font-semibold text-grey10">{subject}</div>
    </div>
  );
};

export default HomeworkCard;
