import styled from "styled-components";

export type AssetShortName = "BTC" | "ETH" | "DOGE" | "BNB" | "DOT" | "DAI" | "SAND" | "USDT";
export type Size = "sm" | "md" | "lg";
type Theme = "LIGHT" | "DARK";

interface CommonCardSettingProps {
  size: Size;
  asset: AssetShortName;
  theme: Theme;
}

interface LogoProps {
  size: Size;
}
interface AssetColorProps {
  [key: string]: {
    background: string;
    primaryColor: string;
    secondaryColor: string;
  };
}
const SIZE = {
  sm: {
    width: "200px",
    height: "130px",
  },
  md: {
    width: "330px",
    height: "200px",
  },
  lg: {
    width: "400px",
    height: "240px",
  },
};
const LOGO = {
  sm: {
    width: "25px",
    height: "25px",
  },
  md: {
    width: "30px",
    height: "30px",
  },
  lg: {
    width: "50px",
    height: "50px",
  },
};
const BACKGROUND_LOGO = {
  sm: {
    width: "200px",
    height: "200px",
  },
  md: {
    width: "260px",
    height: "260px",
  },
  lg: {
    width: "350px",
    height: "350px",
  },
};

const BORDER_RADIUS = {
  sm: {
    borderRadius: "20px",
  },
  md: {
    borderRadius: "25px",
  },
  lg: {
    borderRadius: "30px",
  },
};
const SPACING = {
  sm: {
    padding: "10px",
  },
  md: {
    padding: "15px",
  },
  lg: {
    padding: "17px",
  },
};

const CARD_FONT_SIZE = {
  sm: {
    secondarySize: "9px",
    primarySize: "12px",
    bigSize: "14px",
  },
  md: {
    secondarySize: "10px",
    primarySize: "14px",
    bigSize: "18px",
  },
  lg: {
    secondarySize: "14px",
    primarySize: "18px",
    bigSize: "24px",
  },
};

const ASSET_COLORS_LIGHT: AssetColorProps = {
  BTC: {
    background: "#F6BA46",
    primaryColor: "#282C34",
    secondaryColor: "#525760",
  },
  ETH: {
    background: "#B6BCF1",
    primaryColor: "#282C34",
    secondaryColor: "#525760",
  },
  DOGE: {
    background: "#E0CD81",
    primaryColor: "#282C34",
    secondaryColor: "#525760",
  },
  BNB: {
    background: "#EDD500",
    primaryColor: "#282C34",
    secondaryColor: "#525760",
  },
};
export const StyledCard = styled.div(
  ({ size = "md", asset, theme = "LIGHT" }: CommonCardSettingProps) => ({
    width: SIZE[size].width,
    height: SIZE[size].height,
    borderRadius: BORDER_RADIUS[size].borderRadius,
    color: ASSET_COLORS_LIGHT[asset].primaryColor,
    background: ASSET_COLORS_LIGHT[asset].background,
    padding: SPACING[size].padding,
  }),
  `
  position: relative;
  overflow: hidden;
`
);

export const StyledCoinLogoImage = styled.img(
  ({ size = "md" }: LogoProps) => ({
    width: LOGO[size].width,
    height: LOGO[size].height,
  }),
  `
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
);

export const StyledCopyIcon = styled.img(
  ({ size = "md" }: LogoProps) => ({
    width: CARD_FONT_SIZE[size].primarySize,
    height: CARD_FONT_SIZE[size].primarySize,
  }),
  `
    &:hover {
      filter: contrast(0.5);
      cursor: pointer;
    }
  `
)

export const StyledShadowBackground = styled.img(
  ({ size = "md" }: LogoProps) => ({
    width: BACKGROUND_LOGO[size].width,
    height: BACKGROUND_LOGO[size].height,
  }),
  `
    position: absolute;
    top: -30%;
    right: -10%;
    opacity: 0.8
  `
);

export const Row = styled.div`
  display: flex;
`;
export const CenterRow = styled.div`
  display: flex;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SecondaryInfo = styled.a(
  ({ size = "md", asset, theme = "LIGHT" }: CommonCardSettingProps) => ({
    fontSize: CARD_FONT_SIZE[size].secondarySize,
    color: ASSET_COLORS_LIGHT[asset].secondaryColor,
  })
);

export const PrimaryInfo = styled.a(
  ({ size = "md", asset, theme = "LIGHT" }: CommonCardSettingProps) => ({
    fontSize: CARD_FONT_SIZE[size].primarySize,
    color: ASSET_COLORS_LIGHT[asset].primaryColor,
  })
);

export const BigInfo = styled.a(
  ({ size = "md", asset, theme = "LIGHT" }: CommonCardSettingProps) => ({
    fontSize: CARD_FONT_SIZE[size].primarySize,
    color: ASSET_COLORS_LIGHT[asset].primaryColor,
  })
);
