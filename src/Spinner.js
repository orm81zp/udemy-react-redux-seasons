import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        { message }
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: "Loading..."
}

Spinner.propTypes = {
  message: PropTypes.string.isRequired
}


export default Spinner;
