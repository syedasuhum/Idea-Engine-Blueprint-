import React from "react";
import './QnA_page.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faPenToSquare, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Left_part(){
    const [count, setCount] = useState(["Blueprint 1"]);
    const [clownCounter, setClownCounter] = React.useState(1);
    
    function onChangeForm() {

    }

    function addClown(event) {
        event.preventDefault();
        setClownCounter(prev=> prev+1);
    }
    
    console.log(clownCounter);
    return(
        <header className='q-header-class'>
                <section className='logo1'>
                    <img src='./images/logo.png' alt=''></img>
                    <p>TenMarket</p>
                </section>
                <Link to="/QnA_page" style={{ padding: '0 18px' }}>
                    <button  onClick={addClown} className='new-btn mt-4' >
                        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>

                <div style={{ padding: '0 18px', marginBottom: "180px" }}>
                    <p className='draft mt-3'>DRAFTS</p>
                   
            <div>
                 
                {Array.from({ length: clownCounter}, (_unused, index) => index + 1).map(
                    (clownIndex) => {
                        const clownid = `${clownIndex}`;
                        return (
                        <div key={clownid } className="main-btn mt-2">
                             <FontAwesomeIcon icon={faFileLines} />
                            <label htmlFor={clownid } className='main-btn'>Blueprint {clownIndex}</label>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                        )
                    })
                }
                 
            </div>
        
                    <div className='divider'></div>
                    <p className='draft mt-3' style={{ marginBottom: '0px' }}>GENERATED BLUEPRINTS</p>

                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Standard</button>
                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Upgraded</button>
                    
                </div>

                {/* </div> */}
                <div className='del-position'>
                    <button type='button' className='q-delete mt-3'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>Clear drafts</button>
                </div>

            </header>
    );
}
export default Left_part;