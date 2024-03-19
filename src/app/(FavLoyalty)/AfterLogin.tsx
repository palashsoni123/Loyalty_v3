"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaystoEarnScreen from './EarnPoints';
import WaystoRedeemScreen from './RedeemPoints';
import VipProgram from './VipProgram';
import ReferAndEarn from './Refer&Earn';
import PointHistory from './PointHistory';
import Carousel from 'react-material-ui-carousel';


type Page = 'Home' | 'Earn' | 'Redeem' | 'Tier' | 'Refer' | 'History';

export default function WidgetHome() {

    // Page Change Function 
    const [currentPage, setCurrentPage] = useState<Page>('Home');
    const handlePageChange = (page: Page) => {
        setCurrentPage(page);
    };

    // Widget Visiblity Button Function 
    const [isBoxVisible, setBoxVisibility] = useState(false);
    const toggleFavWidget = () => {
        setBoxVisibility(!isBoxVisible);
    };

    let customerName = "John"
    let PointsOnRefer = 100;
    let Referral_Count = 5;

    return (
        <>
            {currentPage === 'Home' && (
                <>
                    <div className="widget_header CustomWizard-BoxHead">
                        <div className="HeaderLeft-Area-AfterLogin">
                            Welcome {customerName}
                        </div>
                        <div className="HeaderRight-Area" onClick={toggleFavWidget}>
                            <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.0855 21.8622C1.54614 21.8936 1.01568 21.7143 0.605978 21.3621C-0.201993 20.5493 -0.201993 19.2366 0.605978 18.4238L18.2979 0.731866C19.1382 -0.0544877 20.4569 -0.0107747 21.2433 0.829586C21.9543 1.58952 21.9958 2.75756 21.3403 3.56594L3.54415 21.3621C3.13977 21.7092 2.61778 21.8881 2.0855 21.8622Z" fill="white" />
                                <path d="M19.7572 21.8623C19.2106 21.8599 18.6867 21.6429 18.2985 21.258L0.606542 3.56592C-0.142001 2.69179 -0.0402323 1.37629 0.833891 0.627674C1.61407 -0.0404421 2.76467 -0.0404421 3.54478 0.627674L21.3409 18.3196C22.1811 19.1062 22.2245 20.4249 21.438 21.2651C21.4067 21.2985 21.3743 21.3308 21.3409 21.3621C21.1253 21.5496 20.8735 21.6907 20.6011 21.7768C20.3286 21.8628 20.0414 21.8919 19.7572 21.8623Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="widget_body Widget_Home_Screen_Body">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                            >
                                <div className="FavLoyalty_card Points_Area">
                                    <div className="Card_Header">
                                        <div className="Card_Header_Title">
                                            Point Balance
                                        </div>
                                        <div className="Point_History_SVG" onClick={() => handlePageChange('History')}>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3269 8.46559C17.3269 13.0094 13.6306 16.7056 9.08688 16.7056C5.72496 16.7056 2.73032 14.695 1.45724 11.5838C1.39808 11.4394 1.39873 11.2773 1.45905 11.1333C1.51937 10.9893 1.63442 10.8752 1.77889 10.816C1.92336 10.7569 2.08541 10.7575 2.2294 10.8179C2.37339 10.8782 2.48752 10.9932 2.54668 11.1377C3.07484 12.4381 3.97966 13.5509 5.14493 14.3333C6.3102 15.1157 7.68274 15.5319 9.08629 15.5284C12.9809 15.5284 16.1491 12.3602 16.1491 8.46559C16.1491 4.57102 12.9809 1.40274 9.08629 1.40274C7.688 1.39944 6.32038 1.81253 5.15772 2.58935C3.99506 3.36617 3.08999 4.47155 2.55786 5.76464L2.84626 5.50037C2.96139 5.39493 3.11368 5.33953 3.26965 5.34638C3.42561 5.35322 3.57247 5.42174 3.67791 5.53686C3.78336 5.65198 3.83875 5.80428 3.83191 5.96025C3.82507 6.11621 3.75655 6.26307 3.64142 6.36851L2.077 7.80286C2.01016 7.86392 1.93017 7.90879 1.84322 7.934C1.75626 7.95921 1.66468 7.96408 1.57554 7.94824C1.48648 7.93243 1.40227 7.89627 1.32947 7.84257C1.25668 7.78887 1.19728 7.71908 1.15589 7.63865L0.303638 5.98359C0.268238 5.91488 0.246719 5.83986 0.240309 5.76283C0.233899 5.6858 0.242724 5.60827 0.266279 5.53465C0.289835 5.46103 0.327661 5.39277 0.377596 5.33377C0.427532 5.27477 0.488599 5.22618 0.557312 5.19078C0.626025 5.15538 0.701037 5.13386 0.778066 5.12745C0.855096 5.12104 0.932633 5.12987 1.00625 5.15342C1.07987 5.17698 1.14813 5.21481 1.20713 5.26474C1.26613 5.31468 1.31472 5.37574 1.35012 5.44446L1.39191 5.52568C1.98429 3.96515 3.03794 2.62208 4.4126 1.67525C5.78726 0.728427 7.4177 0.22277 9.08688 0.225598C13.6306 0.225598 17.3269 3.92182 17.3269 8.46559Z" fill="#007F5F" />
                                                <path d="M11.4286 10.7715C11.3014 10.7715 11.1777 10.7302 11.076 10.6537L8.72176 8.88802C8.64859 8.83326 8.58921 8.76219 8.54834 8.68045C8.50747 8.59871 8.48624 8.50856 8.48633 8.41717V5.47431C8.48633 5.31821 8.54834 5.16851 8.65872 5.05813C8.7691 4.94775 8.9188 4.88574 9.0749 4.88574C9.231 4.88574 9.3807 4.94775 9.49108 5.05813C9.60146 5.16851 9.66347 5.31821 9.66347 5.47431V8.12288L11.7823 9.71202C11.8813 9.78606 11.9544 9.8894 11.9913 10.0074C12.0282 10.1254 12.027 10.252 11.9879 10.3692C11.9487 10.4864 11.8736 10.5883 11.7732 10.6605C11.6728 10.7326 11.5522 10.7718 11.4286 10.7715Z" fill="#007F5F" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="Point_Count">
                                        <span className='Available_Points'>100</span>
                                        <span className='Available_Points_Value'>Equals to 10 USD</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="sameLine_cards">
                            <div className="FavLoyalty_card Earn_Area" onClick={() => handlePageChange('Earn')}>
                                <div className="Carg_svg">
                                    <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3929_11638" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                                            <path d="M18.5 0.100098H0.5V18.1001H18.5V0.100098Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_3929_11638)">
                                            <path d="M9.5 0.850098V17.3501" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.25 3.8501H7.625C6.92881 3.8501 6.26113 4.12666 5.76884 4.61894C5.27656 5.11122 5 5.7789 5 6.4751C5 7.17129 5.27656 7.83897 5.76884 8.33125C6.26113 8.82353 6.92881 9.1001 7.625 9.1001H11.375C12.0712 9.1001 12.7389 9.37666 13.2312 9.86894C13.7234 10.3612 14 11.0289 14 11.7251C14 12.4213 13.7234 13.0889 13.2312 13.5812C12.7389 14.0735 12.0712 14.3501 11.375 14.3501H5" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="card_name">
                                    Earn
                                </div>
                            </div>
                            
                            <div className="FavLoyalty_card Redeem_Area" onClick={() => handlePageChange('Redeem')}>
                                <div className="Carg_svg">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3755 9.29956V16.7996H3.37549V9.29956" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.8755 5.54956H1.87549V9.29956H16.8755V5.54956Z" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.37549 16.7996V5.54956" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.37549 5.54956H6.00049C5.50321 5.54956 5.02629 5.35202 4.67466 5.00039C4.32303 4.64875 4.12549 4.17184 4.12549 3.67456C4.12549 3.17728 4.32303 2.70037 4.67466 2.34874C5.02629 1.9971 5.50321 1.79956 6.00049 1.79956C8.62549 1.79956 9.37549 5.54956 9.37549 5.54956Z" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.37549 5.54956H12.7505C13.2478 5.54956 13.7247 5.35202 14.0763 5.00039C14.4279 4.64875 14.6255 4.17184 14.6255 3.67456C14.6255 3.17728 14.4279 2.70037 14.0763 2.34874C13.7247 1.9971 13.2478 1.79956 12.7505 1.79956C10.1255 1.79956 9.37549 5.54956 9.37549 5.54956Z" stroke="#007F5F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"></path></svg>                                </div>
                                <div className="card_name">
                                    Redeem
                                </div>
                            </div>
                        </div>
                        <div className="FavLoyalty_card VIP_Program" onClick={() => handlePageChange('Tier')}>
                            <div className="Carg_svg">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9985 5.75146C14.1505 5.75146 15.9111 7.51209 15.9111 9.66402V10.4469H8.08594V9.66402C8.08594 7.51209 9.84661 5.75146 11.9985 5.75146Z" stroke="#007F5F" strokeWidth="1.1" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.4104 5.71346C13.5993 5.48806 14.3803 4.34154 14.1549 3.15263C13.9296 1.96372 12.783 1.18264 11.5941 1.40804C10.4052 1.63344 9.62413 2.77996 9.84953 3.96887C10.0749 5.15778 11.2215 5.93886 12.4104 5.71346Z" stroke="#007F5F" strokeWidth="1.1" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 23.3694H1.00004M8.64635 23.3694V12.9992H15.3536V23.3694M1.93907 23.3694V15.9003H8.42278M15.5772 17.7598H22.0609V23.3694M3.4258 8.39087L4.1975 9.8794L5.85161 10.1533L4.67439 11.3472L4.92506 13.005L3.4258 12.2543L1.92659 13.005L2.17726 11.3472L1 10.1533L2.65415 9.8794L3.4258 8.39087ZM20.5742 8.39087L21.3458 9.8794L23 10.1533L21.8228 11.3472L22.0734 13.005L20.5742 12.2543L19.075 13.005L19.3256 11.3472L18.1484 10.1533L19.8025 9.8794L20.5742 8.39087Z" stroke="#007F5F" strokeWidth="1.1" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div className="card_name">
                                Loyalty Tier
                            </div>
                        </div>
                        <div className="FavLoyalty_card Refer_Earn" onClick={() => handlePageChange('Refer')}>
                            <div className="lineOneRefer">
                                <div className="Carg_svg">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_461_4754)"><path d="M17.8788 5.23402C17.7152 5.23427 17.5571 5.17474 17.4342 5.06662C15.7382 3.57573 13.558 2.75238 11.2998 2.75002C9.16799 2.75339 7.10297 3.49431 5.45525 4.84702C5.3867 4.90328 5.30774 4.94549 5.22288 4.97123C5.13802 4.99697 5.04892 5.00575 4.96066 4.99706C4.87241 4.98837 4.78673 4.96238 4.70852 4.92058C4.63032 4.87877 4.56111 4.82197 4.50485 4.75342C4.44859 4.68487 4.40638 4.60591 4.38064 4.52105C4.3549 4.43619 4.34612 4.34709 4.35481 4.25884C4.37237 4.0806 4.46001 3.91664 4.59845 3.80302C6.48798 2.25264 8.85567 1.40363 11.2998 1.40002C13.8855 1.40232 16.3821 2.34466 18.3243 4.05142C18.4271 4.14216 18.4999 4.26201 18.533 4.39507C18.566 4.52813 18.5579 4.6681 18.5095 4.7964C18.4612 4.9247 18.375 5.03528 18.2624 5.11344C18.1497 5.1916 18.016 5.23366 17.8788 5.23402Z" fill="#007F5F"></path><path d="M7.0251 5.00004H4.7751C4.59608 5.00004 4.42439 4.92893 4.2978 4.80234C4.17121 4.67575 4.1001 4.50406 4.1001 4.32504V2.07504C4.10022 1.94163 4.13987 1.81124 4.21404 1.70034C4.28822 1.58945 4.3936 1.50302 4.51687 1.45198C4.64013 1.40094 4.77576 1.38758 4.90662 1.41357C5.03748 1.43957 5.1577 1.50376 5.2521 1.59804L7.5021 3.84804C7.59638 3.94244 7.66057 4.06266 7.68657 4.19352C7.71256 4.32438 7.6992 4.46001 7.64816 4.58327C7.59712 4.70654 7.51069 4.81192 7.3998 4.88609C7.2889 4.96027 7.15851 4.99992 7.0251 5.00004ZM11.4081 21.2C8.82239 21.1982 6.32566 20.2558 4.3836 18.5486C4.31694 18.4901 4.26246 18.4191 4.22326 18.3395C4.18406 18.26 4.16092 18.1735 4.15515 18.085C4.14939 17.9964 4.16111 17.9077 4.18965 17.8237C4.21819 17.7397 4.26299 17.6622 4.3215 17.5955C4.38 17.5289 4.45106 17.4744 4.53062 17.4352C4.61018 17.396 4.69668 17.3729 4.78519 17.3671C4.96393 17.3555 5.13997 17.4153 5.2746 17.5334C6.97007 19.0246 9.15016 19.848 11.4081 19.85C13.54 19.8467 15.605 19.1058 17.2527 17.753C17.3911 17.6394 17.569 17.5855 17.7473 17.603C17.9255 17.6206 18.0895 17.7082 18.2031 17.8466C18.3167 17.9851 18.3707 18.163 18.3531 18.3412C18.3356 18.5195 18.2479 18.6834 18.1095 18.797C16.22 20.3474 13.8523 21.1964 11.4081 21.2Z" fill="#007F5F"></path><path d="M17.8248 21.2C17.7362 21.2002 17.6484 21.1827 17.5665 21.1487C17.4846 21.1148 17.4103 21.0649 17.3478 21.002L15.0978 18.752C15.0035 18.6576 14.9393 18.5374 14.9133 18.4066C14.8873 18.2757 14.9007 18.1401 14.9517 18.0168C15.0028 17.8935 15.0892 17.7882 15.2001 17.714C15.311 17.6398 15.4414 17.6002 15.5748 17.6H17.8248C18.0038 17.6 18.1755 17.6712 18.3021 17.7977C18.4287 17.9243 18.4998 18.096 18.4998 18.275V20.525C18.4998 20.7041 18.4287 20.8757 18.3021 21.0023C18.1755 21.1289 18.0038 21.2 17.8248 21.2Z" fill="#007F5F"></path><path d="M5 11.3C6.24264 11.3 7.25 10.2927 7.25 9.05005C7.25 7.80741 6.24264 6.80005 5 6.80005C3.75736 6.80005 2.75 7.80741 2.75 9.05005C2.75 10.2927 3.75736 11.3 5 11.3Z" fill="#007F5F"></path><path d="M7.025 12.2H2.975C2.31874 12.2005 1.68949 12.4614 1.22544 12.9254C0.761388 13.3895 0.500477 14.0187 0.5 14.675L0.5 15.125C0.5 15.4976 0.8024 15.8 1.175 15.8H8.825C9.00402 15.8 9.17571 15.7289 9.3023 15.6023C9.42888 15.4757 9.5 15.304 9.5 15.125V14.675C9.49952 14.0187 9.23861 13.3895 8.77456 12.9254C8.31051 12.4614 7.68126 12.2005 7.025 12.2Z" fill="#007F5F"></path><path d="M17.6001 11.3C18.8427 11.3 19.8501 10.2927 19.8501 9.05005C19.8501 7.80741 18.8427 6.80005 17.6001 6.80005C16.3575 6.80005 15.3501 7.80741 15.3501 9.05005C15.3501 10.2927 16.3575 11.3 17.6001 11.3Z" fill="#007F5F"></path><path d="M19.6251 12.2H15.5751C14.9188 12.2005 14.2896 12.4614 13.8255 12.9254C13.3615 13.3895 13.1006 14.0187 13.1001 14.675V15.125C13.1001 15.4976 13.4025 15.8 13.7751 15.8H21.4251C21.6041 15.8 21.7758 15.7289 21.9024 15.6023C22.029 15.4757 22.1001 15.304 22.1001 15.125V14.675C22.0996 14.0187 21.8387 13.3895 21.3747 12.9254C20.9106 12.4614 20.2814 12.2005 19.6251 12.2Z" fill="#007F5F"></path></g><defs><clipPath id="clip0_461_4754"><rect width="21.6" height="21.6" fill="white" transform="translate(0.5 0.5)"></rect></clipPath></defs></svg>
                                </div>
                                <div className="card_name">
                                    <span className="lineOne">Refer & Earn</span>
                                    <span className="lineTwo">Get {PointsOnRefer} Bonus Points</span>
                                </div>
                            </div>
                            <div className="lineTwoRefer">
                                <div className="left_area">
                                    <span className="text">Total Successful Referrals</span>
                                </div>
                                <div className="right_area">
                                    <span className="referral_count">
                                        {Referral_Count}
                                    </span>
                                    <span className="referral_history_icon">
                                        <svg width="15" height="15" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3269 8.46559C17.3269 13.0094 13.6306 16.7056 9.08688 16.7056C5.72496 16.7056 2.73032 14.695 1.45724 11.5838C1.39808 11.4394 1.39873 11.2773 1.45905 11.1333C1.51937 10.9893 1.63442 10.8752 1.77889 10.816C1.92336 10.7569 2.08541 10.7575 2.2294 10.8179C2.37339 10.8782 2.48752 10.9932 2.54668 11.1377C3.07484 12.4381 3.97966 13.5509 5.14493 14.3333C6.3102 15.1157 7.68274 15.5319 9.08629 15.5284C12.9809 15.5284 16.1491 12.3602 16.1491 8.46559C16.1491 4.57102 12.9809 1.40274 9.08629 1.40274C7.688 1.39944 6.32038 1.81253 5.15772 2.58935C3.99506 3.36617 3.08999 4.47155 2.55786 5.76464L2.84626 5.50037C2.96139 5.39493 3.11368 5.33953 3.26965 5.34638C3.42561 5.35322 3.57247 5.42174 3.67791 5.53686C3.78336 5.65198 3.83875 5.80428 3.83191 5.96025C3.82507 6.11621 3.75655 6.26307 3.64142 6.36851L2.077 7.80286C2.01016 7.86392 1.93017 7.90879 1.84322 7.934C1.75626 7.95921 1.66468 7.96408 1.57554 7.94824C1.48648 7.93243 1.40227 7.89627 1.32947 7.84257C1.25668 7.78887 1.19728 7.71908 1.15589 7.63865L0.303638 5.98359C0.268238 5.91488 0.246719 5.83986 0.240309 5.76283C0.233899 5.6858 0.242724 5.60827 0.266279 5.53465C0.289835 5.46103 0.327661 5.39277 0.377596 5.33377C0.427532 5.27477 0.488599 5.22618 0.557312 5.19078C0.626025 5.15538 0.701037 5.13386 0.778066 5.12745C0.855096 5.12104 0.932633 5.12987 1.00625 5.15342C1.07987 5.17698 1.14813 5.21481 1.20713 5.26474C1.26613 5.31468 1.31472 5.37574 1.35012 5.44446L1.39191 5.52568C1.98429 3.96515 3.03794 2.62208 4.4126 1.67525C5.78726 0.728427 7.4177 0.22277 9.08688 0.225598C13.6306 0.225598 17.3269 3.92182 17.3269 8.46559Z" fill="#007F5F" />
                                            <path d="M11.4286 10.7715C11.3014 10.7715 11.1777 10.7302 11.076 10.6537L8.72176 8.88802C8.64859 8.83326 8.58921 8.76219 8.54834 8.68045C8.50747 8.59871 8.48624 8.50856 8.48633 8.41717V5.47431C8.48633 5.31821 8.54834 5.16851 8.65872 5.05813C8.7691 4.94775 8.9188 4.88574 9.0749 4.88574C9.231 4.88574 9.3807 4.94775 9.49108 5.05813C9.60146 5.16851 9.66347 5.31821 9.66347 5.47431V8.12288L11.7823 9.71202C11.8813 9.78606 11.9544 9.8894 11.9913 10.0074C12.0282 10.1254 12.027 10.252 11.9879 10.3692C11.9487 10.4864 11.8736 10.5883 11.7732 10.6605C11.6728 10.7326 11.5522 10.7718 11.4286 10.7715Z" fill="#007F5F" />
                                        </svg>

                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="Offer_Carousel_Area">
                            <Carousel height={100}>
                                {/* Carousel items */}
                                <div className="FavLoyalty_card SliderOne">
                                    Offer 1
                                </div>
                                <div className="FavLoyalty_card SliderTwo">
                                    Offer 2
                                </div>
                                <div className="FavLoyalty_card SliderThree">
                                    Offer 3
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </>
            )}
            {currentPage === 'Earn' && <WaystoEarnScreen />}
            {currentPage === 'Redeem' && <WaystoRedeemScreen />}
            {currentPage === 'Tier' && <VipProgram />}
            {currentPage === 'Refer' && <ReferAndEarn />}
            {currentPage === 'History' && <PointHistory />}
        </>
    )
}