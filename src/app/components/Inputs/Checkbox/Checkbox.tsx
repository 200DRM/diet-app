import { ChangeEvent } from "react";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  initiallyChecked = false,
  name,
  onChange,
  text,
}: Props) => (
  <div className="flex p-4 my-1 text-2xl bg-slate-200 cursor-pointer">
    <input
      defaultChecked={initiallyChecked}
      className={`${styles.checkbox} cursor-pointer`}
      onChange={onChange}
      type="checkbox"
      id={name}
      name={name}
    />
    <label className="cursor-pointer pl-2 uppercase select-none" htmlFor={name}>
      {text}
    </label>
  </div>
);

interface Props {
  initiallyChecked?: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
}
