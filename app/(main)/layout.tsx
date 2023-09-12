import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <div className="navigation-sidebar">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;
