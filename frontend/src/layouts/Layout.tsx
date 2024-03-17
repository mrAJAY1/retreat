import ResponsiveHeader from "@/components/ResponsiveHeader";
import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ResponsiveHeader />
      {/* <Hero /> */}
      <main className="px-6 2xl:px-20 md:px-10 py-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
};
