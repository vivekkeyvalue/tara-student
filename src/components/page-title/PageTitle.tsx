import Button from '../button/Button';

import { PageTitleProps } from './type';

const PageTitle = (props: PageTitleProps) => {
  const {
    title,
    primaryButtonLabel,
    primaryButtonIcon,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    secondaryButtonLabel,
    primaryButtonIconStyle,
    primaryButtonStroke,
    className,
    isPrimaryButtonDisabled,
    isPrimaryButtonLoading
  } = props;
  return (
    <div className={`flex items-center justify-between ${className || ''}`}>
      <h1 className="text-3xl font-bold text-content">{title}</h1>
      <div className="flex items-center gap-4">
        {secondaryButtonLabel && (
          <Button
            label={secondaryButtonLabel}
            handleClick={onSecondaryButtonClick}
            variant="secondary"
            size="medium"
          />
        )}
        {primaryButtonLabel && (
          <Button
            label={primaryButtonLabel}
            handleClick={onPrimaryButtonClick}
            variant="primary"
            size="medium"
            leftIconName={primaryButtonIcon}
            leftIconStyle={primaryButtonIconStyle}
            leftIconStroke={primaryButtonStroke || ''}
            disabled={isPrimaryButtonDisabled || false}
            loading={isPrimaryButtonLoading || false}
          />
        )}
      </div>
    </div>
  );
};

export default PageTitle;
