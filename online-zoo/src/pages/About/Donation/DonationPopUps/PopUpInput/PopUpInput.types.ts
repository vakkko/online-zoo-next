import type { Dispatch, SetStateAction } from "react";

export interface PopUpInputProps {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  autocomplete?: string;
  value: string | null;
  setState: Dispatch<SetStateAction<string | null>>;
  maxLength?: number;
}
