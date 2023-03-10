import React from 'react';

import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';
export default function Accommodation(props) {
  return (
    <>
    <div>
      <SubBanner text="숙소"/>
      <p style={
        {
          marginBottom : "40px",
        }
      }></p>
      <Grade title="Kelvin Hotel" 
      text="20 Kelvin Street, Invercargill 9810032182829"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 41.png"
      />

      <Grade title="The Langlands Hotel" 
      text="59 Dee Street, Invercargill 9810
      0800848688"
      url="https://thelanglands.co.nz/"
      img="../image/image 42.png"
      />
            <Grade title="Bella Vista Motel Invercargill" 
      text="240 Tay Street, Turnbull Thomson Park, Invercargill 9810
      032179799"
      url="https://www.bellavista.co.nz/our-motels/invercargill"
      img="../image/image 43.png"
      />
            <Grade title="Southern Comfort – BBH" 
      text="30 Thomson Street, 
      Avenal, Invercargill 9810
      032183838"
      url="https://www.southerncomfortbackpackers.com/"
      img="../image/image 44.png"
      />

      <Grade title="Ascot Park Hotel" 
      text=" Corner of Tay Street &, Racecourse Road, Invercargill 9810
      032199076"
      url="https://www.ascotparkhotel.co.nz/"
      img="../image/image 6.png"
      />

      
    </div>
    </>
  );
}