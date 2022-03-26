import { CSSProperties } from "react";
import { AssetShortName, Size, StyledCoinLogoImage } from "../commons/common";
interface CoinLogoProps {
  cryptoName: AssetShortName;
  size?: Size;
  style?: CSSProperties;
}
const CoinLogo = (props: CoinLogoProps) => {

  return (
    <StyledCoinLogoImage
      className="App-logo"
      src={`${process.env.PUBLIC_URL}/assets/${props.cryptoName}.svg`}
      size={props.size || "md"}
      alt={props.cryptoName}
      style={props.style}
    />
  );
};
export default CoinLogo;
