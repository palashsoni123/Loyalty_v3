"use client";

import Link from "next/link";

export default function Card(props: CardProps) {
  return (
    <>
      <Link href={props.card_link}>
        <div className="EarnRedeem_card">
          <div className="Card_Icon">{props.children}</div>
          <div className="Card_Text">
            <div className="Card_Heading">{props.Heading}</div>
            <div className="Card_SubText">{props.SubText}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export interface CardProps {
  Heading: string;
  SubText: string;
  card_link: string;
  children?: React.ReactNode;
}
