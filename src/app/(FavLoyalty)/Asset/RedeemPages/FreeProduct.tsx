"use client"
import Header from '../Header_InnerPages'
import { motion, AnimatePresence } from 'framer-motion';


function ProductTile() {
    return (
        <>
            <div className="productTile">
                <div className="ProductImg">
                </div>
                <div className="ProductName">
                    Nike Shoes
                </div>
                <div className="ProductValue">
                    <span className="FreeText">Free</span>
                    <span className="PriceText">$15.00</span>
                </div>
                <div className="ProductPointValue">
                    <div className="leftArea">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4075_12808)">
                                <path d="M4.80029 1.95937V7.35937C4.80029 7.68937 5.07029 7.95937 5.40029 7.95937H6.60029V12.2494C6.60029 12.5554 7.00229 12.6634 7.15829 12.3994L10.2723 7.05937C10.5063 6.65737 10.2183 6.15937 9.75629 6.15937H8.40029L9.89429 2.16937C10.0443 1.77937 9.75629 1.35938 9.33629 1.35938H5.40029C5.07029 1.35938 4.80029 1.62937 4.80029 1.95937V1.95937Z" fill="#001246" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4075_12808">
                                    <rect width="14.4" height="14.4" fill="white" transform="translate(0.600098 0.160156)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Point
                    </div>
                    <div className="rightArea">
                        500
                    </div>

                </div>
            </div>
        </>
    )
}

export default function FreeProduct(props: any) {
    return (
        <>
            <div className="PercentageDiscountScreen">
                <div className="Favloyalty_SubScreens_Header">
                    <Header HeadingText="Free Products" SubHeadingText="Coupon Code" Navigate="Redeem" />
                </div>
                <div className="widget_body">
                    <div className="FreeProductsbody">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.4 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.5 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.6 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.7 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.8 }}
                            >
                                <ProductTile />
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </div>

        </>
    )
}

