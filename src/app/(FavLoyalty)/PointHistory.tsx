"use client"
import React, { useState } from 'react';

import Header from './Asset/Header_InnerPages';

const PointHistoryCard = ({ activityName, activityPoints, credited, activityDate, activityTime }: any) => {

    return (
        <div className="FavLoyalty_card Point_History_Card">
            <div className="lineOne">
                <div className="leftArea ActivityName">{activityName}</div>
                <div className={`rightArea ActivityPoints ${credited ? 'Credited' : 'Debited'}`}>{activityPoints}</div>
            </div>
            <div className="lineTwo">
                <div className="leftArea ActivityDate">{activityDate}</div>
                <div className="rightArea ActivityTime">{activityTime}</div>
            </div>
        </div>
    );
};

export default function PointHistory() {

    return (
        <>
            <div className="Favloyalty_SubScreens_Header">
                <Header HeadingText="Point Activity" SubHeadingText="" Navigate='Home'/>
            </div>
            <div className=" Point_History_Body widget_body">
                <div className="History_Screen">



                    <div className="PointHistory-Area">
                        <div className="PointsActivity_header FavLoyalty_card">
                            <div className="PointCountBox">
                                <div className="lineOne">
                                    <span className="label">
                                        Balance Available: 
                                    </span>
                                    <span className="value">
                                        550
                                    </span>
                                </div>
                                <div className="lineTwo">
                                    <div className="pointCollectCount">
                                        <span className="label">
                                            Points Earned:
                                        </span>
                                        <span className="value">
                                            850
                                        </span>
                                    </div>
                                    <div className="pointSpentCount">
                                        <span className="label">
                                            Points Spent:
                                        </span>
                                        <span className="value">
                                            300
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="Point_Activity_Area">
                            <span className="heading">
                                Points Transactions:
                                <br />
                            </span>
                            <div className="Point_Activity">

                                <PointHistoryCard
                                    activityName="Referral Bonus"
                                    activityPoints={100}
                                    credited={true}
                                    activityDate="21/07/2023"
                                    activityTime="GMT +02:24"
                                />

                                <PointHistoryCard
                                    activityName="20% Discount Coupon"
                                    activityPoints={-500}
                                    credited={false}
                                    activityDate="21/09/2023"
                                    activityTime="GMT +04:24"
                                />
                                <PointHistoryCard
                                    activityName="Referral Bonus"
                                    activityPoints={100}
                                    credited={true}
                                    activityDate="21/07/2023"
                                    activityTime="GMT +02:24"
                                />

                                <PointHistoryCard
                                    activityName="20% Discount Coupon"
                                    activityPoints={-500}
                                    credited={false}
                                    activityDate="21/09/2023"
                                    activityTime="GMT +04:24"
                                />
                                <PointHistoryCard
                                    activityName="Referral Bonus"
                                    activityPoints={100}
                                    credited={true}
                                    activityDate="21/07/2023"
                                    activityTime="GMT +02:24"
                                />

                                <PointHistoryCard
                                    activityName="20% Discount Coupon"
                                    activityPoints={-500}
                                    credited={false}
                                    activityDate="21/09/2023"
                                    activityTime="GMT +04:24"
                                />
                                <PointHistoryCard
                                    activityName="Referral Bonus"
                                    activityPoints={100}
                                    credited={true}
                                    activityDate="21/07/2023"
                                    activityTime="GMT +02:24"
                                />

                                <PointHistoryCard
                                    activityName="20% Discount Coupon"
                                    activityPoints={-500}
                                    credited={false}
                                    activityDate="21/09/2023"
                                    activityTime="GMT +04:24"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


