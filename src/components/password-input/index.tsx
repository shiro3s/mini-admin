import type React from "react";

interface Props {
  name?: string;
  id?: string;
  readOnly?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  placeHolder?: string;
  tabIndex?: number;
}

export const PasswordInput: React.FC<Props> = ({
  name,
  id,
  readOnly,
  disabled,
  minLength,
  maxLength,
  autoComplete,
  placeHolder,
  tabIndex,
}) => {
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          name={name}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={autoComplete}
          placeholder={placeHolder}
          tabIndex={tabIndex}
        />
      </div>
    </div>
  );
};
