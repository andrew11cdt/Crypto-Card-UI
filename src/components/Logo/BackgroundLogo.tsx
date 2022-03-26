import { CSSProperties } from "react";
import { AssetShortName, Size, StyledShadowBackground } from "../commons/common";
interface CoinLogoProps {
  cryptoName: AssetShortName;
  size?: Size;
  style?: CSSProperties;
}
const ShadowBackground = (props: CoinLogoProps) => {

  return (
    <StyledShadowBackground
      src={`${process.env.PUBLIC_URL}/assets/${props.cryptoName}.svg`}
      size={props.size || "md"}
      alt={props.cryptoName}
      style={props.style}
    />
  );
};
export default ShadowBackground;
