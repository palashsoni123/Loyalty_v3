"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQs from "../components/ReferScreen/FAQsScreen";
import Refer from "../components/ReferScreen/ReferScreen";
import History from "../components/ReferScreen/HistoryScreen";
import { initialTabs as tabs } from "../ingredients";
import Header from "../Asset/Header_InnerPages";
type Page = "Refer" | "History" | "FAQs";

export default function ReferEarn() {
  const [selectedTab, setSelectedTab] = useState<Page>(tabs[0].label as Page);

  const handleTabClick = (label: Page) => {
    setSelectedTab(label);
  };

  return (
    <div className="window">
      <div className="Favloyalty_SubScreens_Header">
        <Header HeadingText="Refer & Earn" SubHeadingText="" Navigate="Home" />
      </div>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item.label === selectedTab ? "selected" : ""}
              onClick={() => handleTabClick(item.label as Page)}
            >
              {item.label}
              {item.label === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab === "Refer" && <Refer />}
            {selectedTab === "History" && <History />}
            {selectedTab === "FAQs" && <FAQs />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
