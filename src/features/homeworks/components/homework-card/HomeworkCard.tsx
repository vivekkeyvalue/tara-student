import { LabelVarient } from 'types/homework';
import backgroundImage1 from '@assets/images/card_bg_1.svg';
import backgroundImage2 from '@assets/images/card_bg_2.svg';
import backgroundImage3 from '@assets/images/card_bg_3.svg';
import backgroundImage4 from '@assets/images/card_bg_4.svg';

import HomeworkLabel from '../homework-label/HomeworkLabel';

interface HomeworkCardProps {
  // TODO: needs to be updated with BE
  details: any;
  handleSelect: () => void;
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

const HomeworkCard = ({ details, handleSelect }: HomeworkCardProps) => {
  const backgroundImage = getRandomBackgroundImage();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
      role="presentation"
      className="cursor-pointer rounded-lg bg-white px-4 pb-6 pt-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 md:w-[calc(33%-31px)] lg:w-[calc(25%-36px)]"
      style={backgroundStyle}
      onClick={handleSelect}
    >
      <HomeworkLabel label={details.status as LabelVarient} />
      <div className="truncate-multiline mb-1 mt-4 text-base font-semibold">
        {details.title}
      </div>
      <div className="text-sm font-semibold text-grey10">{details.subject}</div>
    </div>
  );
};

export default HomeworkCard;
