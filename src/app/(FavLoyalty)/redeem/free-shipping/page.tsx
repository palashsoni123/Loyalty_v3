"use client";
import Button_RedeemSecondary from "../../Asset/Button_RedeemSecondary";
import Button_RedeemPrimary from "../../Asset/Button_RedeemPrimary";
import Header from "../../Asset/Header_InnerPages";
import { motion, AnimatePresence } from "framer-motion";

let DiscountPercentageCount = "$" + 10;
let Coupon_Code = "CODE_123sksdiof";

export default function ShippingDiscount(props: any) {
  return (
    <>
      <div className="ShippinhDiscountScreen">
        <div className="Favloyalty_SubScreens_Header">
          <Header
            HeadingText={`Get free Shipping`}
            SubHeadingText="Coupon Code"
            Navigate="Redeem"
          />
        </div>
        <div className="widget_body ShippingDiscountbody">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="upper-area">
                <div className="FavLoyalty_card">
                  <div>
                    <span
                      style={{
                        fontSize: "1rem",
                        opacity: "0.8",
                        fontWeight: "700",
                        display: "block",
                        lineHeight: "1.4",
                      }}
                    >
                      Get Free Shipping
                    </span>
                    <span
                      style={{
                        fontSize: ".7rem",
                        opacity: "0.7",
                        fontWeight: "500",
                        display: "block",
                      }}
                    >
                      APPLICABLE ON WHOLE ORDER
                    </span>
                  </div>
                  <div className="Coupon-Code-Area">
                    <div className="coupon-code">Code: {Coupon_Code}</div>
                    <div className="coupon-actions">
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_3413_9748)">
                            <path
                              d="M12.2338 1.73755H3.6802C2.82484 1.73755 2.125 2.43739 2.125 3.29275V13.4016C2.125 13.8292 2.47492 14.1792 2.9026 14.1792C3.33028 14.1792 3.6802 13.8292 3.6802 13.4016V4.07035C3.6802 3.64267 4.03012 3.29275 4.4578 3.29275H12.2338C12.6615 3.29275 13.0114 2.94283 13.0114 2.51515C13.0114 2.08747 12.6615 1.73755 12.2338 1.73755ZM15.3442 4.84795H6.79061C5.93524 4.84795 5.2354 5.54779 5.2354 6.40315V17.2896C5.2354 18.1449 5.93524 18.8448 6.79061 18.8448H15.3442C16.1996 18.8448 16.8994 18.1449 16.8994 17.2896V6.40315C16.8994 5.54779 16.1996 4.84795 15.3442 4.84795ZM14.5666 17.2896H7.56821C7.14053 17.2896 6.79061 16.9396 6.79061 16.512V7.18076C6.79061 6.75308 7.14053 6.40315 7.56821 6.40315H14.5666C14.9943 6.40315 15.3442 6.75308 15.3442 7.18076V16.512C15.3442 16.9396 14.9943 17.2896 14.5666 17.2896Z"
                              fill="#001246"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3413_9748">
                              <rect
                                width="18.6624"
                                height="18.6624"
                                fill="white"
                                transform="translate(0.570312 0.959961)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="coupon-actionButton">
                    <Button_RedeemSecondary />
                    <Button_RedeemPrimary />
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
              <div className="lower-area">
                <div className="FavLoyalty_card Terms_Condition_Box">
                  <div className="redeem-termsconditions_box">
                    <span>Please be ensured that:</span>

                    <ul className="redeem-termsconditions_ul">
                      <li>This offer is only applicable on orders above $50</li>
                      <li>Discount is not valid on X category items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
