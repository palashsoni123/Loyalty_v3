"use client";

import Header from "../../Asset/Header_InnerPages";
import DatePicketComponent from "../../Asset/DatePickerBirthday";
import ButtonBirthday from "../../Asset/Button_Earn_Birthday";
import { motion, AnimatePresence } from "framer-motion";

export default function CelebrateBirthday() {
  return (
    <>
      <div className="CelebrateBirthdayScreen">
        <div className="Favloyalty_SubScreens_Header">
          <Header
            HeadingText="Celebrate Birthday"
            SubHeadingText="Earn Points"
            Navigate="Earn"
          />
        </div>
        <div className="widget_body Celebrate_Birthday_body">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="FavLoyalty_card">
                <div style={{ lineHeight: "1.6" }}>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      opacity: ".8",
                    }}
                  >
                    What is your date of Birth?
                  </div>
                  <div style={{ fontSize: ".75rem", opacity: ".6" }}>
                    You can only change your birthdate once in a year
                  </div>
                </div>
                <div className="celebrate-birthday">
                  <DatePicketComponent />
                </div>
                <div className="SubmitButtonBirthday">
                  <ButtonBirthday />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
