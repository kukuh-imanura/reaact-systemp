import React, { forwardRef, useId } from 'react';
import { PropTypes } from 'prop-types';

const Input = forwardRef(
  ({ type = 'text', placeholder = 'Placeholder', className = '', ...rest }, ref) => {
    // ID
    const id = useId();

    // LABEL
    const label = type === 'email' ? 'Masukkan Email' : `${placeholder}`;

    return (
      <div className='flex items-center gap-sm'>
        <label htmlFor={id} className='sr-only'>
          {label}
        </label>

        <input
          id={id}
          type={type}
          autoComplete={type}
          placeholder={label}
          className={`rounded py-sm px-base outline-brand text-dark ${className}`}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
Input.displayName = 'Input';

export const InputButton = ({ reset = false, text = 'Submit', className = '' }) => (
  <input
    type={reset ? 'reset' : 'submit'}
    value={(reset && 'Reset') || text}
    className={`${
      reset
        ? 'bg-rose-500 hover:bg-rose-500/50 active:bg-rose-500'
        : 'bg-brand hover:bg-brand/50 active:bg-brand'
    } rounded cursor-pointer px-base py-sm  text-light/90 hover:text-light font-bold h-fit w-fit ${className}`}
  />
);
InputButton.propTypes = {
  className: PropTypes.string,
  reset: PropTypes.bool,
  text: PropTypes.string,
};

// TODO
// Password Input: Field dengan masking untuk password.
// Dropdown: Select menu dengan beberapa opsi.
// Checkbox/Radio: Untuk pilihan ganda.
// Textarea: Untuk input teks yang lebih panjang.
// Switch/Toggle: Untuk mengaktifkan atau menonaktifkan opsi.
// Date Picker: Untuk memilih tanggal.
// File Upload: Komponen untuk upload file.

export default Input;
