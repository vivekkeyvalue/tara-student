import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AUTH } from '@constants/routes';
import Logo from '@assets/images/logo.svg';
import NotificationIcon from '@assets/icons/notification.svg';
import { Avatar, ProfileSettings } from '@components';

const MainHeader = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false);

  const handleDropDownClick = () => {
    setShowUserSettings((prev) => !prev);
  };

  const onClickLogout = () => {
    // TODO: clear token
    navigate(AUTH.LOGIN);
  };

  return (
    <div className="h-auto w-full bg-theme text-content shadow-sm">
      <div className="flex h-85 w-full items-center justify-between border-b border-l px-6 shadow-sm">
        <img src={Logo} alt="logo" width={69} height={15} />

        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <img src={NotificationIcon} alt="notifications" />
          </div>
          <div
            className="relative flex cursor-pointer items-center justify-center gap-2"
            role="presentation"
            onClick={handleDropDownClick}
            ref={ref}
          >
            <Avatar
              name="Test User"
              className="size-12 rounded-lg text-sm text-white"
              bgColor="#7C57FF"
            />
            {showUserSettings && (
              <ProfileSettings onClickLogout={onClickLogout} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
