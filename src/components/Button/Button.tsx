import React, { FC, Fragment } from "react";
import styled from "./button.module.css";
//ts的接口 定义对象的形状
interface Ibtn {
  children: string;
  handler: Function;
  styles?: object;  //  ?:表示这个属性可能有可能没有
}

const Button: FC<Ibtn> = ({ children, handler, styles }) => {
  return (
    <Fragment>
      <button className={styled.btn} onClick={(e) => handler(e)} style={styles}>
        {children}
      </button>
    </Fragment>
  );
};
Button.defaultProps = {
  children: "按钮",
};
export default Button;