import {useMemo, useState} from 'react';
import {BarChart, Bar, ResponsiveContainer, Cell} from 'recharts';

import * as React from 'react';
import Slider, {SliderThumb, SliderProps} from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Divider from 'common/divider';

const AirbnbSlider = styled(Slider)(() => ({
  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    border: '1px solid #DDDDD',
    transition: 'all .2s ease-in-out',
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
    '&:hover,&:focus, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
      height: 30,
      width: 30,
    },
  },
  '& .MuiSlider-track': {
    height: 1,
    color: 'black',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    color: '#dddddd',
    height: 1,
    opacity: 1,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const {children, ...other} = props;
  return <SliderThumb {...other}>{children}</SliderThumb>;
}
function CustomizedSlider(Props: SliderProps) {
  return (
    <AirbnbSlider
      slots={{
        thumb: AirbnbThumbComponent,
      }}
      {...Props}
      getAriaLabel={(index) =>
        index === 0 ? 'Minimum price' : 'Maximum price'
      }
      defaultValue={[20, 40]}
    />
  );
}

const HistogramBarChart = ({
  minValue = 0,
  maxValue = 0,
  priceHistogram = new Array(50).fill(0),
}: {
  minValue: number;
  maxValue: number;
  priceHistogram: number[];
}) => {
  const [selectedRange, setSelectedRange] = useState([minValue, maxValue]);

  const binWidth = (maxValue - minValue) / priceHistogram.length;

  const handleChange = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setSelectedRange([
        Math.min(newValue[0], selectedRange[1] - binWidth * 3),
        selectedRange[1],
      ]);
    } else {
      setSelectedRange([
        selectedRange[0],
        Math.max(newValue[1], selectedRange[0] + binWidth * 3),
      ]);
    }
  };
  const transformedData = useMemo(
    () =>
      priceHistogram.map((count, index) => ({
        minPrice: minValue + index * binWidth,
        maxPrice: minValue + (index + 1) * binWidth,
        count,
        color:
          minValue + index * binWidth >= selectedRange[0] &&
          minValue + (index + 1) * binWidth <= selectedRange[1]
            ? 'black'
            : '#dddddd',
      })),
    [selectedRange],
  );

  return (
    <div className="grid w-full gap-10">
      <div className="flex gap-6">
        <div className="flex-grow rounded-xl border p-2 text-base outline-1 focus-within:outline">
          <label className=" font-light text-secondary-700">Minimum</label>
          <input type="text" className="outline-none" />
        </div>
        <Divider className="shrink-0 basis-4" />
        <div className="flex-grow"></div>
      </div>
      <div className="relative row-start-1 row-end-1 w-full">
        <ResponsiveContainer width={'100%'} minHeight={100} maxHeight={100}>
          <BarChart
            data={transformedData}
            margin={{top: 0, right: 0, bottom: 0, left: 0}}>
            <Bar dataKey="count" fill="url(#colorGradient)">
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <CustomizedSlider
          style={{
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(50%)',
            width: '100%',
          }}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
          disableSwap
          value={selectedRange}
        />
      </div>
    </div>
  );
};

export default HistogramBarChart;
