import React from 'react';
import './QnA_page.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import {useRef} from "react";
import { Link } from 'react-router-dom';
//import Left_part from './Left_part';
//import Right_part from './Right_part';
//import axios from "axios";
// import openaiResources from 'openai/resources';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faPenToSquare, faFileLines } from '@fortawesome/free-solid-svg-icons';
function QnA_page() {
   

    const [count, setCount] = useState(["Blueprint 1"]);
    const [print, setPrint] = useState(1);

    const [idea, setIdea] = useState(false);
    const [startup, setStartup] = useState(false);
    const [brand, setBrand] = useState(false);
    const [digital, setDigital] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [branding, setBranding] = useState(false);
    const [influencer, setInfluencer] = useState(false);
    const [public_relations, setPublic_relation] = useState(false);
    const [content, setContent] = useState(false);
    const [social, setSocial] = useState(false);
    const [performance, setPerformance] = useState(false);
    const [SEO, setSEO] = useState(false);
    const [youtube, setYoutube] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [website, setWebsite] = useState(false);
    const [app, setApp] = useState(false);
    const [youtubeads, setYoutubeads] = useState(false);
    const [instagramads, setInstagramads] = useState(false);
    const [google, setGoogle] = useState(false);
    const [product, setProduct] = useState(false);
    const [service, setService] = useState(false);
    const [company, setCompany] = useState(false);
    const [personal, setPersonal] = useState(false);
    const [digitalprod, setDigitalprod] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [press, setPress] = useState(false);
    const [tv, setTV] = useState(false);
    const [video, setvideo] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [youtubeq1, setYoutubeq1] = useState(false);
    const [youtubeq2, setYoutubeq2] = useState(false);
    const [youtubeq3, setYoutubeq3] = useState(false);
    const [youtubeq4, setYoutubeq4] = useState(false);
    const [youtubeq5, setYoutubeq5] = useState(false);
    const [facebookq1, setFacebook1] = useState(false);
    const [facebookq2, setFacebook2] = useState(false);
    const [facebookq3, setFacebook3] = useState(false);
    const [facebookq4, setFacebook4] = useState(false);
    const [websiteq1, setWebsite1] = useState(false);
    const [websiteq2, setWebsite2] = useState(false);
    const [websiteq3, setWebsite3] = useState(false);
    const [websiteq4, setWebsite4] = useState(false);
    const [appq1, setAppq1] = useState(false);
    const [appq2, setAppq2] = useState(false);
    const [appq3, setAppq3] = useState(false);
    const [appq4, setAppq4] = useState(false);
    const [digitalprodq1, setDigitalprodq1] = useState(false);
    const [digitalprodq2, setDigitalprodq2] = useState(false);
    const [digitalprodq3, setDigitalprodq3] = useState(false);
    const [digitalprodq4, setDigitalprodq4] = useState(false);
    const [physicalprodq1, setPhysicalprodq1] = useState(false);
    const [serviceq1, setServiceq1] = useState(false);
    const [serviceq2, setServiceq2] = useState(false);
    const [companyq1, setCompanyq1] = useState(false);
    const [personalq1, setPersonalq1] = useState(false);
    const [personalq2, setPersonalq2] = useState(false);
    const [personalq3, setPersonalq3] = useState(false);
    const [influencerq1, setInfluencerq1] = useState(false);
    const [influencerq2, setInfluencerq2] = useState(false);
    const [influencerq3, setInfluencerq3] = useState(false);
    const [influencerq4, setInfluencerq4] = useState(false);
    const [influencerq5, setInfluencerq5] = useState(false);
    const [pressq1, setPressq1] = useState(false);
    const [pressq2, setPressq2] = useState(false);
    const [pressq3, setPressq3] = useState(false);
    const [pressq4, setPressq4] = useState(false);
    const [pressq5, setPressq5] = useState(false);
    const [tvq1, setTVq1] = useState(false);
    const [tvq2, setTVq2] = useState(false);
    const [tvq3, setTVq3] = useState(false);
    const [tvq4, setTVq4] = useState(false);
    const [videoq1, setVideoq1] = useState(false);
    const [videoq2, setVideoq2] = useState(false);
    const [videoq3, setVideoq3] = useState(false);
    const [videoq4, setVideoq4] = useState(false);
    const [photoq1, setPhotoq1] = useState(false);
    const [photoq2, setPhotoq2] = useState(false);
    const [photoq3, setPhotoq3] = useState(false);
    const [photoq4, setPhotoq4] = useState(false);
    const [business, setBusiness] = useState(false);
    const [d2c, setD2C] = useState(false);
    const [b2c, setB2C] = useState(false);
    const [b2b, setB2B] = useState(false);
    const [independent, setIndependent] = useState(false);
    const [d2cq1, setD2Cq1] = useState(false);
    const [d2cq2, setD2Cq2] = useState(false);
    const [d2cq3, setD2Cq3] = useState(false);
    const [Vendor, setVendor] = useState(false);
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);
    const [project, setProject] = useState(false);
    const [yearly, setYearly] = useState(false);
    const [halfyearly, setHalfyearly] = useState(false);
    const [quarterly, setQuarterly] = useState(false);
    const [projectq1, setProjectq1] = useState(false);
    

    const [buttonidea, setButtonidea] = useState("");
    const [buttonstartup, setButtonstartup] = useState("");
    const [buttonbrand, setButtonbrand] = useState("");
    const [buttondigital, setButtonDigital] = useState("");
    const [buttontechnology, setButtonTechnology] = useState("");
    const [buttonbranding, setButtonBranding] = useState("");
    const [buttonpublic, setButtonPublic] = useState("");
    const [buttoninfluencer, setButtonInfluencer] = useState("");
    const [buttoncontent, setButtonContent] = useState("");
    const [buttonsocial, setButtonSocial] = useState("");
    const [buttonperformance, setButtonPerformance] = useState("");
    const [buttonseo, setButtonSeo] = useState("");
    const [buttonyoutube, setButtonYoutube] = useState("");
    const [buttonfacebook, setButtonFacebook] = useState("");
    const [buttoninstagram, setButtonInstagram] = useState("");
    const [buttonwebsite, setButtonWebsite] = useState("");
    const [buttonapp, setButtonApp] = useState("");
    const [buttonyoutubeads, setButtonYoutubeads] = useState("");
    const [buttongoogle, setButtonGoogle] = useState("");
    const [buttoninstagramads, setButtonInstagramads] = useState("");
    const [buttonproduct, setButtonProduct] = useState("");
    const [buttonservice, setButtonService] = useState("");
    const [buttoncompany, setButtonCompany] = useState("");
    const [buttonpersonal, setButtonPersonal] = useState("");
    const [buttondigitalprod, setButtonDigitalprod] = useState("");
    const [buttonphysical, setButtonPhysical] = useState("");
    const [buttonpress, setButtonPress] = useState("");
    const [buttontv, setButtonTV] = useState("");
    const [buttonvideo, setButtonvideo] = useState("");
    const [buttonphoto, setButtonPhoto] = useState("");
    //const [buttonbusiness, setButtonBusiness] = useState("");
    const [buttonb2b, setButtonB2B] = useState("");
    const [buttonb2c, setButtonB2C] = useState("");
    const [buttond2c, setButtonD2C] = useState("");
    const [buttonindependent, setButtonIndependent] = useState("");
    const [buttonyes, setButtonYes] = useState("");
    const [buttonno, setButtonNo] = useState("");
    const [buttonproject, setButtonProject] = useState("");
    const [buttonyearly, setButtonYearly] = useState("");
    const [buttonhalfyearly, setButtonHalfyearly] = useState("");
    const [buttonquarterly, setButtonQuarterly] = useState("");


    // function counter() {
    //     setCount(prevCount => prevCount + 1);
    // }

    const ideaHandler = () => {
        setIdea(true);
        setStartup(false);
        setBrand(false);
        setButtonidea("1px solid #0060d0");
        setButtonstartup(false);
        setButtonbrand(false);
    };

    const startupHandler = () => {
        setIdea(false);
        setStartup(true);
        setBrand(false);
        setButtonstartup("1px solid #0060d0");
        setButtonbrand(false);
        setButtonidea(false);

    };

    const brandHandler = () => {
        setIdea(false);
        setStartup(false);
        setBrand(true);
        setButtonbrand("1px solid #0060d0");
        setButtonstartup(false);
        setButtonidea(false);
    };

    const digitalHandler = () => {
        setDigital(true);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital("1px solid #0060d0");
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const technologyHandler = () => {
        setDigital(false);
        setTechnology(true);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology("1px solid #0060d0");
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const brandingHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(true);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding("1px solid #0060d0");
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const influencerHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(true);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer("1px solid #0060d0");
        setButtonContent(false);
    };

    const public_relationsHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(true);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic("1px solid #0060d0");
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const contentHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(true);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent("1px solid #0060d0");
    };

    const socialHandler = () => {
        setSocial(true);
        setPerformance(false);
        setSEO(false);

        setButtonSocial("#0060d0");
        setButtonPerformance(false);
        setButtonSeo(false);
    };

    const performanceHandler = () => {
        setSocial(false);
        setPerformance(true);
        setSEO(false);

        setButtonSocial(false);
        setButtonPerformance("#0060d0");
        setButtonSeo(false);
    };

    const SEOHandler = () => {
        setSocial(false);
        setPerformance(false);
        setSEO(true);

        setButtonSocial(false);
        setButtonPerformance(false);
        setButtonSeo("#0060d0");
    };

    const youtubeHandler = () => {
        setFacebook(false);
        setInstagram(false);
        setYoutube(true);

        setButtonYoutube("#0060d0");
        setButtonFacebook(false);
        setButtonInstagram(false);
    };
    const facebookHandler = () => {
        setFacebook(true);
        setInstagram(false);
        setYoutube(false);

        setButtonFacebook("#0060d0");
        setButtonYoutube(false);
        setButtonInstagram(false);
    };
    const instagramHandler = () => {
        setFacebook(false);
        setYoutube(false);
        setInstagram(true);

        setButtonInstagram("#0060d0");
        setButtonFacebook(false);
        setButtonYoutube(false);
    };
    const youtubeadsHandler = () => {
        setGoogle(false);
        setInstagramads(false);
        setYoutubeads(true);

        setButtonYoutubeads("#0060d0");
        setButtonGoogle(false);
        setButtonInstagramads(false);
    };
    const googleHandler = () => {
        setGoogle(true);
        setInstagramads(false);
        setYoutubeads(false);

        setButtonGoogle("#0060d0");
        setButtonYoutubeads(false);
        setButtonInstagramads(false);
    };
    const instagramadsHandler = () => {
        setGoogle(false);
        setYoutubeads(false);
        setInstagramads(true);

        setButtonInstagramads("#0060d0");
        setButtonGoogle(false);
        setButtonYoutubeads(false);
    };
    const appHandler = () => {
        setWebsite(false);
        setApp(true);

        setButtonApp("#0060d0");
        setButtonWebsite(false);
    };
    const websiteHandler = () => {
        setApp(false);
        setWebsite(true);

        setButtonWebsite("#0060d0");
        setButtonApp(false);
    };

    const productHandler = () => {
        setProduct(true);
        setService(false);
        setCompany(false);
        setPersonal(false)

        setButtonProduct("#0060d0");
        setButtonService(false);
        setButtonCompany(false);
        setButtonPersonal(false);
    };
    const serviceHandler = () => {
        setProduct(false);
        setService(true);
        setCompany(false);
        setPersonal(false)

        setButtonService("#0060d0");
        setButtonProduct(false);
        setButtonCompany(false);
        setButtonPersonal(false);
    };
    const companyHandler = () => {
        setProduct(false);
        setService(false);
        setCompany(true);
        setPersonal(false)

        setButtonCompany("#0060d0");
        setButtonProduct(false);
        setButtonService(false);
        setButtonPersonal(false);
    };
    const personalHandler = () => {
        setProduct(false);
        setService(false);
        setCompany(false);
        setPersonal(true)

        setButtonPersonal("#0060d0");
        setButtonProduct(false);
        setButtonCompany(false);
        setButtonService(false);
    };
    const digitalprodHandler = () => {
        setDigitalprod(true);
        setPhysical(false);

        setButtonDigitalprod("#0060d0");
        setButtonPhysical(false);
    };
    const physicalHandler = () => {
        setDigitalprod(false);
        setPhysical(true);

        setButtonPhysical("#0060d0");
        setButtonDigitalprod(false);
    };
    const pressHandler = () => {
        setPress(true);
        setTV(false);

        setButtonPress("#0060d0");
        setButtonTV(false);
    };
    const tvHandler = () => {
        setPress(false);
        setTV(true);

        setButtonTV("#0060d0");
        setButtonPress(false);
    };
    const videoHandler = () => {
        setvideo(true);
        setPhoto(false);

        setButtonvideo("#0060d0");
        setButtonPhoto(false);
    };
    const photoHandler = () => {
        setvideo(false);
        setPhoto(true);

        setButtonPhoto("#0060d0");
        setButtonvideo(false);
    };
    const independentHandler = () => {
        setB2B(false);
        setB2C(false);
        setD2C(false);
        setIndependent(true)

        setButtonIndependent("#0060d0");
        setButtonB2B(false);
        setButtonB2C(false);
        setButtonD2C(false);
    };
    const b2bHandler = () => {
        setB2B(true);
        setB2C(false);
        setD2C(false);
        setIndependent(false);

        setButtonB2B("#0060d0");
        setButtonIndependent(false);
        setButtonB2C(false);
        setButtonD2C(false);
    };
    const b2cHandler = () => {
        setB2B(false);
        setB2C(true);
        setD2C(false);
        setIndependent(false);

        setButtonB2C("#0060d0");
        setButtonB2B(false);
        setButtonIndependent(false);
        setButtonD2C(false);
    };
    const d2bHandler = () => {
        setB2B(false);
        setB2C(false);
        setD2C(true);
        setIndependent(false);

        setButtonD2C("#0060d0");
        setButtonB2B(false);
        setButtonB2C(false);
        setButtonIndependent(false);
    };
    const yesHandler = () => {
        setNo(false);
        setYes(true);

        setButtonYes("#0060d0");
        setButtonNo(false);
    };
    const noHandler = () => {
        setYes(false);
        setNo(true);

        setButtonNo("#0060d0");
        setButtonYes(false);
    };
    
    const quarterlyHandler = () => {
        setYearly(false);
        setHalfyearly(false);
        setQuarterly(true);
        setProject(false);

        setButtonQuarterly("#0060d0");
        setButtonYearly(false);
        setButtonHalfyearly(false);
        setButtonProject(false);
    };
    const yearlyHandler = () => {
        setQuarterly(false);
        setHalfyearly(false);
        setYearly(true);
        setProject(false);

        setButtonYearly("#0060d0");
        setButtonQuarterly(false);
        setButtonHalfyearly(false);
        setButtonProject(false);
    };
    const halfyearlyHandler = () => {
        setQuarterly(false);
        setYearly(false);
        setHalfyearly(true);
        setProject(false);

        setButtonHalfyearly("#0060d0");
        setButtonYearly(false);
        setButtonQuarterly(false);
        setButtonProject(false);
    };
    const projectHandler = () => {
        setYearly(false);
        setHalfyearly(false);
        setProject(true);
        setQuarterly(false);

        setButtonProject("#0060d0");
        setButtonYearly(false);
        setButtonHalfyearly(false);
        setButtonQuarterly(false);
    };
   


    function add() {
        // console.log("before "+print)
        setPrint((prev) => {
            prev = prev + 1;
            setCount([...count, `Blueprint ${prev}`])
            return prev;
        })
        console.log(count);
    }

// blueprint Increment button
    const [clownCounter, setClownCounter] = React.useState(1);
    
    function onChangeForm() {

    }

    function addClown(event) {
        event.preventDefault();
        setClownCounter(prev=> prev+1);
    }
    
    console.log(clownCounter);

// Input field 
const inputRef = useRef(null);
const inputFunction = () =>{

    if (inputRef.current) {
        inputRef.current.readOnly = false;
        inputRef.current.focus();
      }
};

//input display
//const [typeText, setTypeText] = React.useState("");

//   function handleText(event) {
//     setTypeText(event.target.value);
//   }


//const [inputText, setInputText] = useState("");
//const [displayedText, setDisplayedText] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleEnterPress = (event) => {
//     if (event.key === "Enter") {
//       setDisplayedText(inputText);
//       setInputText("");
//     }
// };
// For Question and Answer

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [userResponses, setUserResponses] = useState([]);

const questions = [
    "",
    <span style={{width:'200px'}}> <TypeAnimation
    sequence={[
        // Same substring at the start will only be typed out once, initially
        'What type of content and messaging will resonate with your audience (For example, product reviews, sponsored content, giveaways)',
        1000,
        
    ]}
    wrapper="span"
    speed={70}
    style={{ fontSize: '1rem', color: '#ececf1', textAlign: 'center', gap: '10px', overflowWrap:'break-word', }}
/></span>,
    "What is your age?",
    "Where are you from?",
  ];
  const handleResponseSubmit = (response) => {
    setUserResponses([...userResponses, response]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
    return (
        <div className='container'>
             <header className='q-header-class left-acc'>
                <section className='logo1'>
                    <img src='./images/logo.png' alt=''></img>
                    <p>TenMarket</p>
                </section>
                <Link to="/QnA_page" style={{ padding: '0 18px' }}>
                    <button  onClick={addClown} className='new-btn mt-4' >
                        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>

                <div style={{ padding: '0 18px', marginBottom: "120px" }}>
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
           
            {/* <Left_part data={{clownCounter}}/> */}


            <div className='row mt-2'>
                <div className='col-lg-9 col-md-8 col-12'>
                    <div class="blue">
                        <h3>Blueprint {clownCounter}</h3>
                        <div className='pro-algin'>
                        <span className='qna-free'>Free</span>
                        <span className='qna-pro'>Pro</span>
                        <span className='qna-pro'>Premium</span>
                    </div>
                    </div>
                    
                    <div className='mydivider mt-5'></div>
                    <div className='bussiness' style={{ padding: "32px 10px" }}>
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What is the stage of your business ?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>
                </div>

                <div className='row qna-box' style={{ width: "70%" }}>
                    <div className='col-lg-4 col-md-6 col-12' onClick={ideaHandler}>
                        <div className='qna-border' style={{ border: buttonidea }}>
                            <img src='./images/stage_idea.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Idea / Vision</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={startupHandler}>
                        <div className='qna-border' style={{ border: buttonstartup }}>
                            <img src='./images/stage_startup.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Startup / Growth</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandHandler}>
                        <div className='qna-border' style={{ border: buttonbrand }}>
                            <img src='./images/stage_brand.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Brand / Enterprise</p>
                        </div>

                    </div>

                    
               </div> 
               
                
                
            </div>
                

                {/* Idea / Vision */}
                {idea && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }} >
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }} onClick={inputFunction}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>
                    </div>

                )}

                {/* Startup / Growth */}
                {startup && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }}>
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }} onClick={inputFunction}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                )}

                {/* Brand / Enterprise */}
                {brand && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }}>
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Digital Marketing */}
                {digital && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the digital marketing?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={socialHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonsocial }}>
                                    <p>Social Media Marketing</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={performanceHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonperformance }}>
                                    <p>Performance marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={SEOHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonseo }}>
                                    <p>SEO, ASO & SEM</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {/* Technology and innovation */}
                {technology && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the technology and innovation?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={websiteHandler} style={{backgroundColor:buttonwebsite}}>
                                    <p onClick={inputFunction}>Website Development</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={appHandler} style={{backgroundColor:buttonapp}}>
                                    <p onClick={inputFunction}>App development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Branding & Design */}
                {branding && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the branding and Designing?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={productHandler} style={{backgroundColor:buttonproduct}}>
                                    <p>Product Branding</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={serviceHandler} style={{backgroundColor:buttonservice}}>
                                    <p onClick={inputFunction}>Service Branding</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={companyHandler} style={{backgroundColor:buttoncompany}}>
                                    <p onClick={inputFunction}>Company branding</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box mt-0'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={personalHandler} style={{backgroundColor:buttonpersonal}}>
                                    <p onClick={inputFunction}>Personal branding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* influencer */}
                {influencer && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your goals for influencer marketing?(For example, increasing brand awareness, driving product sales, expanding reach)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>
                           <div></div>
                    </div>
                )}

                {/* public relation */}
                {public_relations && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the public relations?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={pressHandler} style={{backgroundColor:buttonpress}}>
                                    <p onClick={inputFunction} >Press Release</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={tvHandler} style={{backgroundColor:buttontv}}>
                                    <p onClick={inputFunction}>TV & Radio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content */}
                {content && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the content production?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={videoHandler} style={{backgroundColor:buttonvideo}}>
                                    <p onClick={inputFunction}>Video shoot</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'  onClick={photoHandler} style={{backgroundColor:buttonphoto}}>
                                    <p onClick={inputFunction}>Photo shoot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Social Media Marketing  */}
                {social && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' >
                                <div className='digital-text' onClick={youtubeHandler} style={{ backgroundColor: buttonyoutube }}>
                                    <p onClick={inputFunction}>Youtube</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={facebookHandler} style={{ backgroundColor: buttonfacebook }}>
                                    <p onClick={inputFunction}>Facebook</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={instagramHandler} style={{ backgroundColor: buttoninstagram }}>
                                    <p onClick={inputFunction}>Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Performance marketing  */}
                {performance && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={youtubeadsHandler} style={{backgroundColor:buttonyoutubeads}}>
                                    <p onClick={inputFunction}>Youtube Ads</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={googleHandler} style={{backgroundColor:buttongoogle}}>
                                    <p onClick={inputFunction}>Google Ads</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={instagramadsHandler} style={{backgroundColor:buttoninstagramads}}>
                                    <p onClick={inputFunction}>Instagram Ads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SEO, ASO & SEM */}
                {SEO && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular preference in mind?. If not, just click on “Generate Now”, we’ll take care of the rest)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>On Page SEO</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Off Page SEO</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Local SEO</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box mt-0'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Technical SEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            
                 {/* Youtube */}
                 {youtube && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your overall goals for Youtube marketing? (For example, increasing brand awareness, build a community, generating leads)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* facebook */}
                {facebook && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your overall goals for FB marketing? (For example, increasing brand awareness, driving engagement, generating leads)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* instagram */}
                 {instagram && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your overall goals for Instagram marketing? (For example, increasing brand awareness, driving engagement, generating leads)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* Website */}
                 {website && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the name of the website (For Eg. disco.com) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* app */}
                 {app && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the name of the app (For Eg. Dunzo, Zomato etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* Youtube ads */}
                {youtubeads && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the specific goals (KPIs) for your Youtube Ads campaigns (For Eg. Increase website traffic or generate leads)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* Google */}
                {google && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the specific goals for your Google Ads campaigns (For Eg. Increase website traffic or generate leads)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* instagram ads */}
                 {instagramads && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your specific goals for Instagram ads? (For eg. increasing brand awareness, driving website traffic, boosting conversions)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* Product branding */}
                 {product && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the product branding?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={digitalprodHandler} style={{backgroundColor:buttondigitalprod}}>
                                    <p> Digital Product</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'onClick={physicalHandler} style={{backgroundColor:buttonphysical}} >
                                    <p onClick={inputFunction}>Physical Product</p>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                )}

                
                 {/* Service */}
                 {service && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the core values and personality traits that you want your brand to embody?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                
                 {/* company */}
                 {company && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the unique value proposition or core message of your company?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                
                 {/* personal */}
                 {personal && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the desired perception or emotional response you want to evoke in your target audience?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* digital product */}
                 {digitalprod && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the core purpose and value proposition of your tech product?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                
                 {/* physical */}
                 {physical && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the unique selling point or key feature of your physical product?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/*press */}
                 {press && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the core purpose and value proposition of your tech product?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                
                 {/* TV */}
                 {tv && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What specific product/service/event etc do you wish to do PR for (For Eg. Product Launch, Event Release etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/*video */}
                 {video && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Which type of video do you wish to shoot (For Eg. Music Video, Ad Film, Social Media Content etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                
                 {/* photo */}
                 {photo && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Which type of images do you wish to get shot (For Eg. Model, Food Photography, Product Usage etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* youtubeq1 */}
                {youtubeq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What type of content will resonate best with your target audience on YouTube? (For example, tutorials, product reviews, Vlogs)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* youtubeq2 */}
                 {youtubeq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* youtubeq3 */}
                 {youtubeq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* youtubeq4 */}
                 {youtubeq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* youtubeq5 */}
                 {youtubeq5 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is your total budget?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

               

                 {/* facebookq1 /instagramq1 */}
                 {facebookq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* facebookq2/instagramq2 */}
                 {facebookq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* facebookq3 /instagramq3*/}
                 {facebookq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* facebookq4 /instagramq4 */}
                {facebookq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is your total budget?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* websiteq1 */}
                 {websiteq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What will be the key features or functions of the website?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* websiteq2 */}
                 {websiteq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your users to do on the site (For Eg. Order Food, Buy Clothes etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* websiteq3*/}
                 {websiteq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What will be your business model for the website (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* websiteq4 */}
                {websiteq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the budget & timeline (For eg. $15000 & 4 weeks) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* appq1 */}
                 {appq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What will be the key features or functions of the app?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* appq2 */}
                 {appq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your users to do on the app (For Eg. Order Food, Buy Clothes etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* appq3*/}
                 {appq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What will be your business model for the app (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* appq4 */}
                {appq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the budget & timeline (For eg. $15000 & 4 weeks) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                
                 {/* digitalprodq1 */}
                 {digitalprodq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'How do you want your tech product brand to be perceived in the market?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* digitalprodq2/physicalq2 */}
                 {digitalprodq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What key brand attributes and messaging will resonate with your target audience? (For Eg. Speed, security etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* digitalprodq3 /physicalq3 /seriveq2*/}
                 {digitalprodq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* digitalprodq4 /physicalq4/serviceq3 */}
                {digitalprodq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total budget for executing the branding exercise?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* digitalprodq1 */}
                {physicalprodq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'How do you want your physical product brand to be perceived in the market?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* serviceq1 */}
                {serviceq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the core values and personality traits that you want your brand to embody?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* serviceq2 */}
                {serviceq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the desired perception and emotional connection you want to establish with your target audience?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* companyq1 */}
                 {companyq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the key personality traits and qualities you want your brand to convey?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* personalq1 */}
                 {personalq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What channels and platforms will you use to showcase your personal brand and engage with your target audience?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* personalq2*/}
                {personalq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is your budget for the entire branding exercise?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/* personalq3 */}
                 {personalq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total timeline for performing this exercise?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                
                 {/* influencerq1 */}
                 {influencerq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What type of content and messaging will resonate with your audience (For example, product reviews, sponsored content, giveaways)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* influencerq2 */}
                 {influencerq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to FEEL after looking at your influencer posts (For Eg. Fomo, Desire etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* influencerq3 */}
                 {influencerq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to DO (For eg. Buy Now, Visit store, Like etc)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* influencerq4 /pressq6/tvq5*/}
                 {influencerq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total timeline for executing the campaign (For Eg. 2 Weeks, 3 months etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* influencerq5  /pressq7/tvq6 /videoq5/photoq5*/}
                 {influencerq5 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total budget (Please be realistic here) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* pressq1 */}
                  {pressq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are the specific goals and objectives of your marketing campaign? (For example, to increase brand awareness, and generate leads etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/*pressq2 */}
                 {pressq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the desired reputation or perception you want to build through PR efforts?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* pressq3 */}
                 {pressq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What key messages and stories do you want to convey to the public and media?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* pressq4 */}
                 {pressq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What type of media channels do you wish to focus on most for reaching your target audience (For Eg. Fashion Magazines, Finance Articles etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* pressq5 */}
                 {pressq5 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to DO (For eg. Buy Now, Visit store, Like etc)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 
                 {/*tvq1 */}
                 {tvq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What specific goals and objectives do you want to achieve? (For example, increase brand visibility and credibility, drive website traffic)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* tvq2 */}
                 {tvq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Which TV and radio channels or stations are most relevant ? (For example, national broadcast networks, popular local radio stations)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* tvq3 */}
                 {tvq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What key messages and stories do you want to convey? (For example, highlighting the features and benefits of your product, sharing customer testimonials etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/*tvq4 */}
                 {tvq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to DO (For eg. Buy Now, Search Name, Like etc)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                
                 {/*videoq1 */}
                 {videoq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What key messages or story do you want to convey through the video?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* videoq2 */}
                 {videoq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to feel after watching the video (For Eg. Fomo, Empathy etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* videoq3 */}
                 {videoq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to do after watching the video (For eg. Buy Now, Visit store, Like etc)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/*videoq4 */}
                 {videoq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total timeline for executing the video (For Eg. 2 Weeks, 3 months etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 
                 {/*photoq1 */}
                 {photoq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What key message do you want to convey through the photo (For Eg. Zara - New fashion line launch) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* photoq2 */}
                 {photoq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to feel after looking at the images (For Eg. Fomo, Desire etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/* photoq3 */}
                 {photoq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What do you want your viewers to do after looking at the image (For eg. Buy Now, Visit store, Like etc)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/*photoq4 */}
                 {photoq4 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the total timeline for executing the Photoshoot (For Eg. 2 Weeks, 3 months etc)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/*business */}
                {business && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What is the nature of your business?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={d2bHandler} style={{backgroundColor:buttond2c}}>
                                    <p onClick={inputFunction} >D2C (Direct to Consumer)</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={b2cHandler} style={{backgroundColor:buttonb2c}}>
                                    <p onClick={inputFunction}>B2C (Business to Consumer)</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={b2bHandler} style={{backgroundColor:buttonb2b}}>
                                    <p onClick={inputFunction}>B2B (Business to Business)</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={independentHandler} style={{backgroundColor:buttonindependent}}>
                                    <p onClick={inputFunction} >Independent (Artist, Musician etc)</p>
                                </div>
                            </div>
                            </div>
                    </div>
                )}

                {/*D2C/b2b/b2c */}
                {d2c && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What’s your product/business name?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                {/*D2C q1 */}
                {d2cq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Which industry does it belong to (For Eg. Retail, Electronics, Fashion etc) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                {/*D2C q2 */}
                {d2cq2 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Give us the product or business description and what is unique about it (USP). Try to be elaborate',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                {/*D2C q3 */}
                {d2cq3 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Who is the target customer (For Eg. 18-24 Yr old Metro Women, try to define your audience to the fullest)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/*vendor */}
                 {Vendor && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you need vendor for Digital Marketing?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={yesHandler} style={{backgroundColor:buttonyes}}>
                                    <p onClick={inputFunction} >Yes</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={noHandler} style={{backgroundColor:buttonno}}>
                                    <p onClick={inputFunction}>No</p>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                )}

                 {/*yes */}
                 {yes && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What kind of a vendor partnership are you looking for? Retainer (Monthly payments) or a Project (One time cost)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={projectHandler} style={{backgroundColor:buttonproject}}>
                                    <p onClick={inputFunction} >Project</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={yearlyHandler} style={{backgroundColor:buttonyearly}}>
                                    <p onClick={inputFunction}>Yearly Retainer</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={halfyearlyHandler} style={{backgroundColor:buttonhalfyearly}}>
                                    <p onClick={inputFunction}>Half-Yearly Retainer</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={quarterlyHandler} style={{backgroundColor:buttonquarterly}}>
                                    <p onClick={inputFunction} >Quarterly Retainer</p>
                                </div>
                            </div>
                            </div>
                    </div>
                )}

                 {/*project/yearly/half-yearly/quarterly */}
                 {project && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'When are you planning to start (Help us with an approximate date) ?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}
                 {/*projectq1 */}
                 {projectq1 && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Input estimated budget. If you’ve chosen retainer, then put the monthly budget',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                 {/*No/ question after projectq1 */}
                 {no && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'You are ready to create a blueprint, now!',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text' onClick={noHandler} style={{backgroundColor:buttonno}}>
                                    <p>Genernate a blueprint, Now</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                )}
                 


                

            {/* Right accordion */}
            <div className='qna-header right-acc'>
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
            {/* <Right_part/> */}

            
            
             <footer>
             {/* <div className="container">
        <input type="text" onChange={handleText} />
      </div>  */}

<div className='container input--field p-3' style={{color:"white", marginLeft:"14rem", textAlign:"initial"}} >
      {currentQuestionIndex < questions.length ? (
        <div style={{marginTop:"2px", whiteSpace:"normal"}}>
          {/* <p>{questions[currentQuestionIndex]}</p> */}
          
          {userResponses.map((response, index) => (
            <div key={index}>
              <p>
                <strong>Response:</strong> {response}
              </p>
              {index === currentQuestionIndex - 1 &&
                index < questions.length - 1 && (
                  <p>
                    <strong>Next Question:</strong> {questions[index + 1]}
                  </p>
                )}
            </div>
            
          ))}
          <input
          type="text" className='input-field p-2'
          readOnly= {true} placeholder='Enter the text here' ref = {inputRef}  
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleResponseSubmit(event.target.value);
                event.target.value = ""; // Clear input field
              }
            }}
          />
        </div>
      ) : (
        <p>Questionnaire complete! Thank you for your responses.</p>
      )}
    </div>

      {/* <div className="text-container">{typeText}</div> */}
       {/* <div style={{color:"white", marginLeft:"14rem", textAlign:"initial"}} ref = {inputRef}> {displayedText && <p>  {displayedText}</p>}</div>  */}
    {/* <div className='container input--field p-3' >
      <input type="text" className='input-field p-2' value={inputText} onChange={handleInputChange} onKeyPress={handleEnterPress} 
      readOnly= {true} placeholder='Enter the text here' ref = {inputRef} />
       
    </div>
     */}
    {/* <div className='bottom-position'>
    <p className='bottom-text'>
        Our goal is to make the startup ecosystem systems more seamless. Your<a href='#'>feedback</a> will help us to improve.
        </p>
        </div> */}
    
</footer> 

            
        </div>


    );
}
export default QnA_page;