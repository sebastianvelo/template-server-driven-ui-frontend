import TailwindStyle from "common/tailwind/TailwindStyle";
import { ActionProps } from "common/ui/components/action/Action";
import {
  bgColorStyle
} from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";
import ButtonDropdownContentItem from "./item/ButtonDropdownContentItem";

const contentStyle = TailwindStyle.builder()
  .add(`flex flex-col w-28 shadow-xl`)
  .add(`border border-dark-light rounded-md`)
  .add(`absolute left-2 z-40`)
  .add(bgColorStyle({}))
  .get();

export interface ButtonDropdownContentProps {
  actions?: ActionProps[];
}

const ButtonDropdownContent: FunctionComponent<ButtonDropdownContentProps> = (props: ButtonDropdownContentProps) => (
  <div className={contentStyle}>
    {props.actions?.map((action) => (
      <ButtonDropdownContentItem {...action} />
    ))}
  </div>
);

export default ButtonDropdownContent;