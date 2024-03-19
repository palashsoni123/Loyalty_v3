import * as React from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const iOSBoxShadow =
  '0 0 0 3.072px rgba(68, 161, 137, 0.20)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#0a84ff' : '#007bff',
  height: 5,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#3B9C84',
    border:'3px solid #fff',
    // boxShadow: '0 0 0 3.072px rgba(68, 161, 137, 0.20)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0 0 0 3.072px rgba(68, 161, 137, 0.20)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&:before': {
      boxShadow:
        '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -10,
    backgroundColor: '#3B9C84',
    color: 'white',
    borderRadius: 20,
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? 'white' : 'white',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 8,
    backgroundColor: '#49a68c'
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#c8e9e2',
    height: 8,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export default function CustomizedSlider() {
  return (
      <IOSSlider aria-label="ios slider" defaultValue={60} valueLabelDisplay="on" />
  );
}