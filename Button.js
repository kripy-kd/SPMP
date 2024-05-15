import React from 'react';
import "./Button.css"

function Button_GLogin({login}) 
{
return (<>
<div class="box box1" onClick={login}>
  <div class="oddboxinner"> Take Me !!! <span style={{float:'right',color:'yellowgreen'}}>...Click</span></div>
</div>
{/* <div class="box box2">
  <div class="evenboxinner"> bangers!</div>
</div> */}
{/* <div class="box box3">
  <div class="oddboxinner">yyyy</div>
</div> */}
</>
)
}
export default Button_GLogin