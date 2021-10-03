import React from 'react';

import './styles/alert.css';


const Alert = ({importance, strong, message}) => {
  const [show, setShow] = React.useState('show');

  React.useEffect(() => {
    let dismissable = setTimeout(() => setShow(''), 5000);
    return () => {
        clearTimeout(dismissable);
      };},
    []
  );

  return (
    <div id="dismissable-alert" className={`alert alert-${importance || 'danger'} alert-dismissible  fade ${show}`} role="alert">
      <strong>{strong || 'Oops! :('}</strong> {message || 'An error ocurred while loading this page, try again later.'}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
