"use client"



export default function Card(props: CardProps) {


    return (
        <>
            <div className="EarnRedeem_card" onClick={props.FunctionName}>
                <div className="Card_Icon">
                    {props.children}
                </div>
                <div className="Card_Text">
                    <div className="Card_Heading">
                        {props.Heading}
                    </div>
                    <div className="Card_SubText">
                        {props.SubText}
                    </div>
                </div>
            </div>
        </>
    )
}

export interface CardProps {
    Heading: string;
    SubText: string;
    FunctionName: () => void;
    children?: React.ReactNode;
}
