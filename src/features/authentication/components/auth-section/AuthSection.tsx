import Head from '@layouts/head/Head';
import { AuthSectionProps } from 'types/auth-section';

const AuthSection = ({
  children,
  pageTitle,
  title = '',
  description = ''
}: AuthSectionProps) => (
  <>
    <Head title={pageTitle} />
    <div className="flex w-full flex-col items-center justify-center">
      {!!title && (
        <div className="shantell-sans-font mb-2 mt-14 w-full text-center text-5.5 font-bold text-black">
          {title}
        </div>
      )}
      {!!description && (
        <div className="flex w-4/5 items-center gap-2 text-center text-sm font-normal text-grey">
          <div>{description}</div>
        </div>
      )}

      {children}
    </div>
  </>
);

export default AuthSection;
