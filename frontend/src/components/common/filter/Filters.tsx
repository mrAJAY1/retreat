import Divider from 'common/divider';
import HistogramPriceSlider from './HistogramPriceSlider';
import PlaceTypeFilter from './PlaceTypeFilter';

const mockData = {
  minValue: 840,
  maxValue: 810000,
  priceHistogram: [
    1, 15, 40, 86, 145, 210, 239, 192, 115, 91, 87, 49, 43, 26, 28, 16, 14, 14,
    11, 10, 7, 2, 5, 2, 1, 2, 3, 1, 3, 3, 2, 2, 0, 3, 1, 1, 2, 0, 0, 0, 1, 0, 0,
    0, 1, 1, 0, 0, 0, 0,
  ],
};

const DrawerFilters = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 border-t px-6 py-8 md:hidden">
      <PlaceTypeFilter />
      <Divider className="border-inherit" />
      <HistogramPriceSlider
        minValue={mockData.minValue}
        maxValue={mockData.maxValue}
        priceHistogram={mockData.priceHistogram}
      />
    </div>
  );
};

export default DrawerFilters;
