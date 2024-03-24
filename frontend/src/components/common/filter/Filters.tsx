import Divider from 'common/divider';
import HistogramPriceSlider from './HistogramPriceSlider';
import PlaceTypeFilter from './PlaceTypeFilter';

const DrawerFilters = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 border-t px-6 py-8 md:hidden">
      <PlaceTypeFilter />
      <Divider className="border-inherit" />
      <HistogramPriceSlider />
    </div>
  );
};

export default DrawerFilters;
