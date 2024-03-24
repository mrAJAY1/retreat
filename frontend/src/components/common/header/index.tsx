import {lazy, Suspense} from 'react';
import {useMediaQuery} from 'react-responsive';

const MobileHeader = lazy(() => import('mobile/header'));
const DesktopHeader = lazy(() => import('desktop/header'));

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <header aria-label="header" className="relative md:mb-12 md:py-6">
      <Suspense fallback={null}>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </Suspense>
    </header>
  );
};

export default ResponsiveHeader;
