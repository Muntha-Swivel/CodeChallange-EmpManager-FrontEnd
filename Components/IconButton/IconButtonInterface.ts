import CSS from "csstype";

export interface IIconButton {
  icon: JSX.Element;
  onClick?: () => void;
  btnStyle?: CSS.Properties;
}
