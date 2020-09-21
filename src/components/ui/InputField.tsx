import React from 'react';

interface Props {
  name: string;
  value: string;
  label: string;
  placeholder: string;
  type: string;
  small?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  error?: string;
}

const InputField = (props: Props) => {
  return (
    <>
      <div className="form-group">
        <label>{props.label}</label>
        <input
          name={props.name}
          type={props.type}
          className={`form-control ${props.error ? 'is-invalid' : ''}`}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        {props.error ? (
          <small className="form-text invalid-feedback">{props.error}</small>
        ) : null}
        {props.small && !props.error ? (
          <small className="form-text text-muted">{props.small}</small>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
