export interface PageTitleProps {
  title: string;
  primaryButtonLabel?: string;
  primaryButtonIcon?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  secondaryButtonLabel?: string;
  primaryButtonIconStyle?: string;
  primaryButtonStroke?: string;
  className?: string;
  isPrimaryButtonDisabled?: boolean;
  isPrimaryButtonLoading?: boolean;
}
