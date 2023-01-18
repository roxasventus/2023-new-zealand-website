
import { React, useState } from 'react';

export default function Circleimage(props){


    return( 
        <div class="box" style={{
            background: "#BDBDBD",
            width: "40%",
            height: "60%",
            borderRadius: "70%",
            overflow: "hidden",
            
            marginTop: "212.13px"
            }}>
            <img class="profile" alt="" src={props.image}
              style={{    
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
    );
}





