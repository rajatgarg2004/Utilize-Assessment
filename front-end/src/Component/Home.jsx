import React, { useState } from 'react';
import IconPicker from './Iconpicker';
import { icons } from 'feather-icons';

const Home = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
}) => {


  return (
    <div className='bg-white w-auto flex flex-col items-center justify-center h-auto p-10'>
      {(
        <IconPicker
          rowsInOnePage={rowsInOnePage}
          columnsInOnePage={columnsInOnePage}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
          pickerHeight={rowsInOnePage * parseInt(iconHeight) + (rowsInOnePage *20)}
          pickerWidth={columnsInOnePage * parseInt(iconWidth) + (columnsInOnePage * 20)}
        />
      )}
    </div>
  );
};

export default Home;
