import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import { styled } from '@mui/material/styles';

const SuperRange: React.FC<SliderProps> = (props) => {
    
    return (<div>
        <Slider
            sx={{    color: 'rgba(0, 204, 34, 1)',
            height: '4px',
            width : '147px',
            padding: '15px 0',
            borderRadius: '10px',
            '& .MuiSlider-thumb': {
              height: '18px',
              width: '18px',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              border: '1px solid rgba(0, 204, 34, 1)',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                height: 6,
                width: 6,
                backgroundColor: 'rgba(0, 204, 34, 1)',
              },
            },
            '& .MuiSlider-rail': {
                backgroundColor: 'rgba(139, 139, 139, 1)',
              },  
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    
    </div>
        
    )
}

export default SuperRange
