import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const MobileHeader = lazy(() => import("./MobileHeader"));
const DesktopHeader = lazy(() => import("./DesktopHeader"));

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header aria-label="header" className="py-6 md:mb-12 relative">
      <Suspense fallback={null}>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </Suspense>
    </header>
  );
};

export default ResponsiveHeader;
