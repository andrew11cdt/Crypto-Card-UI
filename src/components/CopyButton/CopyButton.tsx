import { CSSProperties } from "react";
import { Size, StyledCopyIcon } from "../commons/common";
interface CopyButtonProps {
  textToCopy: string
  size?: Size;
  style?: CSSProperties;
}
const CopyButton = (props: CopyButtonProps) => {

  return (
    <StyledCopyIcon
      src={`${process.env.PUBLIC_URL}/icons/copy.png`}
      size={props.size || "md"}
      alt="copy"
      style={props.style}
      onClick={() => navigator.clipboard.writeText(props.textToCopy)}
    />
  );
};
export default CopyButton;
