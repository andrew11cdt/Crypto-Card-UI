import React, { CSSProperties } from "react";
import {
  StyledCard,
  AssetShortName,
  BigInfo,
  CenterRow,
  Column,
  SecondaryInfo,
  Size,
  PrimaryInfo,
  StyledShadowBackground,
} from "../commons/common";
import CopyButton from "../CopyButton/CopyButton";
import ShadowBackground from "../Logo/BackgroundLogo";
import CoinLogo from "../Logo/CoinLogo";

interface CardProps {
  cryptoName: AssetShortName;
  address: string;
  title?: string;
  size?: Size;
  style?: CSSProperties;
}
const Card = (props: CardProps) => {
  let { size, title, cryptoName, address } = props;
  size = size || "md";
  return (
    <StyledCard
      style={props.style}
      asset={cryptoName}
      size={size}
      theme="LIGHT"
    >
      <CenterRow>
        <CoinLogo size={size} cryptoName={cryptoName} />
        <Column style={{ marginLeft: 5, textAlign: "left" }}>
          <SecondaryInfo size={size} asset={props.cryptoName}>
            Total
          </SecondaryInfo>
          <BigInfo size={size} asset={props.cryptoName}>
            {"190,000"}
          </BigInfo>
        </Column>
      </CenterRow>
      <Column
        style={{
          alignSelf: "flex-end",
          textAlign: "left",
          bottom: "25px",
          position: "absolute",
        }}
      >
        <PrimaryInfo asset={cryptoName} size={size}>
          {title}
        </PrimaryInfo>
        <PrimaryInfo
          asset={cryptoName}
          size={size}
          style={{ marginTop: "6px" }}
        >
          {address}
          <CopyButton style={{ marginLeft: '6px' }} textToCopy={address}/>
        </PrimaryInfo>
      </Column>
      <ShadowBackground cryptoName={cryptoName} size={size} style={{}} />
    </StyledCard>
  );
};

export default Card;
