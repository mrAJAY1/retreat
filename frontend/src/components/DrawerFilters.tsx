import Divider from "./Divider";
import PlaceTypeFilter from "./PlaceTypeFilter";

const DrawerFilters = () => {
  return (
    <div className="py-8 flex-1 px-6 md:hidden border-t flex flex-col items-center gap-10">
      <PlaceTypeFilter />
      <Divider className="border-inherit" />
    </div>
  );
};

export default DrawerFilters;
