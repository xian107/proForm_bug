/// <reference types="react-scripts" />
import "antd/lib/select";
declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.json" {
    const value: string;
    export default value;
}
declare module "*.jpg" {
    const value: string;
    export default value;
}
declare module "*.svg" {
    const value: string;
    export default value;
}
declare module "*.less" {
    const value: string;
    export default value;
}
declare module '*.module.less' {
    const classes: {
    readonly [key: string]: string
    }
    export default classes
    declare module '*.less'
}
declare module "antd/lib/select" {
    export interface SelectProps {
        children?: React.ReactNode;
    }
  }