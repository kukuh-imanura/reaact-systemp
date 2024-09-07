import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';

// Info Alert: Untuk pesan informasi.
// Success Alert: Untuk notifikasi berhasil.
// Warning Alert: Untuk peringatan.
// Error Alert: Untuk notifikasi kesalahan.
// Toast Notification: Pesan yang muncul dan menghilang secara otomatis di sudut layar.

export const Alert = forwardRef(
  ({ children, text = 'Alert', type = 'info', className = '', onClick }, ref) => {
    // TYPE
    let color, icon;
    switch (type) {
      case 'info':
        color = ['bg-brand', 'text-light', 'text-light'];
        icon = 'fa-circle-info';
        break;

      case 'success':
        color = ['bg-emerald-200', 'text-emerald-800', 'text-emerald-600'];
        icon = 'fa-circle-check';
        break;

      case 'warning':
        color = ['bg-yellow-200', 'text-yellow-800', 'text-yellow-600'];
        icon = 'fa-triangle-exclamation';
        break;

      case 'error':
        color = ['bg-red-200', 'text-red-800', 'text-red-600'];
        icon = 'fa-circle-exclamation';
        break;
    }

    return ReactDOM.createPortal(
      <div
        className={`${color[0]} hidden fixed top-base left-1/2 -translate-x-1/2 rounded min-w-3xl p-base z-[101] ${className}`}
        ref={ref}
        role='alert'
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-base'>
            <FontAwesomeIcon icon={`fas ${icon}`} className={color[1]} />
            {children || <p className={color[2]}>{text}</p>}
          </div>
          <FontAwesomeIcon
            icon={'fas fa-xmark'}
            className={`cursor-pointer ${color[1]} hover:${color[1]}/50 active:${color[1]}`}
            onClick={onClick}
          />
        </div>
      </div>,
      document.body
    );
  }
);
Alert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.any,
  text: PropTypes.string,
  type: PropTypes.string,
};
Alert.displayName = 'AlertSucess';

export default Alert;
