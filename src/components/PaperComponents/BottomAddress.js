import React from 'react';

const BottomAddress = () => {
  const bottomStyle = {
    width: '100%',
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    WebkitTransform: 'translateX(-50%)',
    bottom: 0
  };


  return(
    <div style={bottomStyle}>
      <div className="row">
        <div className="address col-xs-12 text-xs-center hidden-sm-down">
          <p>tuomo(at)tuomolaine.com</p>
        </div>
      </div>
    </div>
  );


}

export default BottomAddress;