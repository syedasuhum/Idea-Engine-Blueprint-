import React from "react";
import './QnA_page.css'
function Right_part(){
    return(
         
         <div className='qna-header'>
         <div className='divider mt-5'></div>
         <div className='cards-group'>
             <p className='stp-title'>Steps</p>
             <div className='step-group'>
                 <span className='line'></span>
                 <div className='step'>
                     <span className='circle'></span>
                     <p className='text'>Stage Selection</p>
                 </div>
                 <div className='step'>
                     <span className='circle'></span>
                     <p className='text'>Service Requirements</p>
                 </div>
                 <div className='step'>
                     <span className='circle'></span>
                     <p className='text'>Service Spefication</p>
                 </div>
                 <div className='step'>
                     <span className='circle'></span>
                     <p className='text'>Business bio</p>
                 </div>
                 <div className='step'>
                     <span className='circle'></span>
                     <p className='text'>Vendor partership</p>
                 </div>
             </div>

             <div className='company-group'>
                 <p>Privacy policies</p>
                 <p>Terms and conditions</p>
                 <p>© 2023 TEN Inc.</p>
                 <p>Contact us</p>
             </div>
         </div>
     </div>
     

    );
}
export default Right_part;