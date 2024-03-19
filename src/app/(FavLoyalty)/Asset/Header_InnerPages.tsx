"use client"

import React, { useContext, useState } from 'react';
import Pre_Login from "../PreLogin";
// import Post_Login from "../AfterLogin"
import WaystoEarnScreen from '../EarnPoints';
import WaystoRedeemScreen from '../RedeemPoints';
import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../context/UserContext';


type Page = 'JoinNow' | 'Home' | 'Inner_Header' | 'Earn' | 'Redeem';
type NavigateOption = 'Home' | 'Earn' | 'Redeem';

interface HeaderProps {
    Navigate: NavigateOption;
    SubHeadingText: String;
    HeadingText: String;
}


export default function Header(props: HeaderProps) {

    // Page Change Function 
    const [currentPage, setCurrentPage] = useState<Page>('Inner_Header');
    const handlePageChange = (page: Page) => {
        setCurrentPage(page);
    };

    // // Widget Visiblity Button Function 
    // const [isBoxVisible, setBoxVisibility] = useState(false);
    // const toggleFavWidget = () => {
    //     setBoxVisibility(!isBoxVisible);
    //     console.log("setBoxVisibility")
    // };
    const value:any=useContext(UserContext)
    // console.log(value)
    const {toggleFavWidget}:any=value;

    return (
        <>
            {currentPage === 'Inner_Header' && (
                <div className="Widget_InnerPagesHeader">
                    <div className="InnerPagesHeaderLeft_Area">
                        <div className="Back_Button" onClick={() => handlePageChange(props.Navigate)}>
                            <svg width="10" height="12" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75471 17.433C8.59013 17.4339 8.42699 17.4024 8.27462 17.3402C8.12226 17.2779 7.98368 17.1862 7.86683 17.0703L0.363645 9.56714C0.130732 9.33284 0 9.01589 0 8.68551C0 8.35514 0.130732 8.03819 0.363645 7.80389L7.86683 0.300699C8.10606 0.0958291 8.41379 -0.011224 8.72852 0.000932624C9.04325 0.0130892 9.3418 0.14356 9.56451 0.366272C9.78722 0.588985 9.91769 0.887536 9.92985 1.20227C9.94201 1.51699 9.83495 1.82472 9.63008 2.06395L3.01477 8.67926L9.63008 15.2946C9.80569 15.4687 9.9257 15.6911 9.97495 15.9334C10.0242 16.1758 10.0005 16.4273 9.90679 16.6562C9.81309 16.8851 9.65363 17.0811 9.44856 17.2193C9.24349 17.3576 9.00203 17.4319 8.75471 17.433Z" fill="white" />
                            </svg>
                        </div>
                        <div className="Header_Text">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ x: 10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -10, opacity: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <div className='Heading_Text'>
                                        {props.HeadingText}
                                    </div>
                                </motion.div>
                            </AnimatePresence>


                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ x: 10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -10, opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <div className='Subheading_Text'>
                                        {props.SubHeadingText}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="HeaderRight-Area" onClick={toggleFavWidget}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                            >
                                <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.0855 21.8622C1.54614 21.8936 1.01568 21.7143 0.605978 21.3621C-0.201993 20.5493 -0.201993 19.2366 0.605978 18.4238L18.2979 0.731866C19.1382 -0.0544877 20.4569 -0.0107747 21.2433 0.829586C21.9543 1.58952 21.9958 2.75756 21.3403 3.56594L3.54415 21.3621C3.13977 21.7092 2.61778 21.8881 2.0855 21.8622Z" fill="white" />
                                    <path d="M19.7572 21.8623C19.2106 21.8599 18.6867 21.6429 18.2985 21.258L0.606542 3.56592C-0.142001 2.69179 -0.0402323 1.37629 0.833891 0.627674C1.61407 -0.0404421 2.76467 -0.0404421 3.54478 0.627674L21.3409 18.3196C22.1811 19.1062 22.2245 20.4249 21.438 21.2651C21.4067 21.2985 21.3743 21.3308 21.3409 21.3621C21.1253 21.5496 20.8735 21.6907 20.6011 21.7768C20.3286 21.8628 20.0414 21.8919 19.7572 21.8623Z" fill="white" />
                                </svg>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div >
            )
            }
            {currentPage === 'Home' && <Pre_Login />}
            {/* {currentPage === 'Home' && <Post_Login />} */}
            {currentPage === 'Earn' && <WaystoEarnScreen />}
            {currentPage === 'Redeem' && <WaystoRedeemScreen />}

        </>
    )
}
