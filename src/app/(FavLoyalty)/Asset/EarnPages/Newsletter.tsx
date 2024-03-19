"use client"

import Header from '../Header_InnerPages'
import TextField from '@mui/material/TextField';
import Button from '../../Asset/Button_Earn_Newsletter'
import { motion, AnimatePresence } from 'framer-motion';



export default function NewsLetter() {

    return (
        <>
            <div className="NewsletterScreen">
                <div className="Favloyalty_SubScreens_Header">
                    <Header HeadingText="Subscribe to Newsletter" SubHeadingText="Earn Points" Navigate="Earn"></Header>
                </div>
                <div className="widget_body">

                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <div className="FavLoyalty_card  Newsletter_body">
                                <div style={{ lineHeight: '1.6' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: "700", opacity: ".8" }}>
                                        Confirm your mail ID
                                    </div>
                                    <div style={{ fontSize: '.8rem', opacity: ".6" }}>
                                        We keep your information with care
                                    </div>
                                </div>
                                <div className='newsletter-subscribe'>
                                    <TextField
                                        label="Email"
                                        onChange={() => { }}
                                        autoComplete="email"
                                    />
                                </div>
                                <Button />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </>
    )
}

