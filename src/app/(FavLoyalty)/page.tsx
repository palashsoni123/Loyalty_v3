"use client"

import React, { useState } from 'react';
import { AppProvider } from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json";
import Pre_Login from './PreLogin'
import { motion } from 'framer-motion';


export default function Loyalty_Widget() {

    // Widget Visiblity Button Function 
    const [isBoxVisible, setBoxVisibility] = useState(false);
    const toggleFavWidget = () => {
        setBoxVisibility(!isBoxVisible);
    };

    return (
        <AppProvider
            i18n={en}>
            <div className="FavWidget_Area">
                <div className={`FavWidget_Box FavLoyalty_card ${isBoxVisible ? 'visible' : ''}`}>
                    <Pre_Login />
                </div>
                <div className="FavWidget_Balloon" onClick={toggleFavWidget}>
                    <motion.button whileTap={{ scale: 0.9 }}>
                        <div className="WidgetIconArea">
                            <div className="WidgetIcon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.1739 5.45381H24.1358C24.4046 5.02834 24.582 4.55075 24.6326 4.04566C24.7942 2.43144 23.9441 0.984411 22.4968 0.342875C21.1665 -0.24682 19.6715 -0.00575747 18.5949 0.97063L16.0213 3.30306C15.5201 2.75486 14.7996 2.41034 14 2.41034C13.1989 2.41034 12.4773 2.75596 11.9759 3.30584L9.39905 0.970357C8.32078 -0.00603085 6.82642 -0.246163 5.49669 0.343204C4.04978 0.984801 3.19949 2.43232 3.36158 4.04648C3.41228 4.55119 3.58958 5.02855 3.85837 5.45381H1.82607C0.817525 5.45381 0 6.27138 0 7.27989V10.019C0 10.5232 0.408789 10.932 0.91306 10.932H27.087C27.5912 10.932 28.0001 10.5233 28.0001 10.019V7.27989C28 6.27138 27.1825 5.45381 26.1739 5.45381ZM11.2608 5.14947V5.45381H6.96558C5.83067 5.45381 4.93751 4.39582 5.22096 3.21424C5.34581 2.69389 5.7214 2.25032 6.2072 2.02577C6.87427 1.71744 7.6132 1.81643 8.17347 2.32355L11.2616 5.12257C11.2615 5.13159 11.2608 5.14044 11.2608 5.14947ZM22.8208 3.80323C22.7527 4.75222 21.8955 5.45391 20.9441 5.45391H16.7392V5.14958C16.7392 5.13881 16.7385 5.12814 16.7384 5.11737L19.7787 2.36161C20.2465 1.93762 20.901 1.7397 21.506 1.92017C22.3743 2.17917 22.8843 2.91757 22.8208 3.80323ZM1.82607 12.7581V26.1495C1.82607 27.158 2.6436 27.9755 3.65214 27.9755H12.1739V12.7581H1.82607ZM15.8261 12.7581V27.9755H24.3478C25.3563 27.9755 26.1739 27.158 26.1739 26.1495V12.7581H15.8261Z" fill="white" fillOpacity="0.95" />
                                </svg>
                            </div>
                        </div>
                    </motion.button>

                </div>
            </div>
        </AppProvider>
    )
}