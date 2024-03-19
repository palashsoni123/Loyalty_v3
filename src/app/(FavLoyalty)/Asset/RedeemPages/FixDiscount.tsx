"use client"
import ButtonMUI from "../Button_RedeemCode"
import RangeSlider from "../RangeSlider_FixDiscount"
import Header from '../Header_InnerPages'
import { motion, AnimatePresence } from 'framer-motion';

export default function FixDiscount(props: any) {

    return (
        <>
            <div className="FixDiscountScreen">
                <div className="Favloyalty_SubScreens_Header">
                    <Header HeadingText="Quick Discount" SubHeadingText="Swipe and get instant discount coupon" Navigate="Redeem" />
                </div>
                <div className="widget_body FixDiscountBody">
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <div className='upper-area'>
                                <div className="FavLoyalty_card Slider_Area">
                                    <div className='Card_heading'>
                                        Select Points to Redeem
                                    </div>
                                    <div className='Range-Slider-Area-Widget'>
                                        <RangeSlider />
                                        <div className='range-container'>
                                            <div className='range-item'>
                                                Min
                                                <span className='range-value'>0</span>
                                            </div>
                                            <div className='range-item'>
                                                Max
                                                <span className='range-value'>100</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="value-enter-area">
                                        <div className='value-input'>
                                            <input className="FixDiscount_inputStyles" id=":r4:" placeholder="$60" aria-labelledby=":r4:Label" aria-invalid="false" type="text" value=""></input>
                                        </div>
                                        <ButtonMUI />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>


                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className='lower-area'>
                                <div className="FavLoyalty_card Terms_Condition_Box">
                                    <div className='redeem-termsconditions_box'>
                                        <span>
                                            Please be ensured that:
                                        </span>

                                        <ul className='redeem-termsconditions_ul'>
                                            <li>This offer is only applicable on orders above $50
                                            </li>
                                            <li>Discount is not valid on X category items
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div >

        </>
    )
}

