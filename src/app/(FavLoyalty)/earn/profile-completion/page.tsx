"use client";

import Header from "../../Asset/Header_InnerPages";
import TextField from "@mui/material/TextField";
import Button from "../../Asset/Button_Earn_ProfileCompletion";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileCompletion() {
  return (
    <>
      <div className="ProfileCompletionScreen">
        <div className="Favloyalty_SubScreens_Header">
          <Header
            HeadingText="Complete Your Profile"
            SubHeadingText="Earn Points"
            Navigate="Earn"
          />
        </div>
        <div className="widget_body Profile_Completion_body">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="FavLoyalty_card Profile_Completion_body">
                <div>Complete these details for rewards</div>
                <br />
                <div className="complete-profile">
                  <TextField
                    label="Full Name"
                    onChange={() => {}}
                    autoComplete="off"
                  />
                  <TextField
                    label="Phone No."
                    onChange={() => {}}
                    autoComplete="Number"
                  />

                  <TextField
                    label="Information 3"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                  <TextField
                    label="Information 4"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </div>
                <br />
                <Button />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
