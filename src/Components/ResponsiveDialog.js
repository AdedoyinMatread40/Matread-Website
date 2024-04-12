import React, {useState} from 'react';

function ResponsiveDialog({ children, onClose }) {
  const[isHovering, setIsHovering] = useState(false);

  const closeButtonStyle = {
    fontFamily: `Playfair Display, Georgia, serif`,
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease', /* Smooth transition */
    fontSize: '18px',
    cursor: 'pointer',
    color: isHovering ? '#000000' : '#ffffff', /* Same color as the section background */
    backgroundColor: isHovering ? '#ffffff' : '#006199', /* Section background color */
    padding: '0.65rem 1.0rem',
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button style={closeButtonStyle} onClick={onClose} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Back</button>


      </div>

    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 5s ease-in-out',
    zIndex: 1000,
  },
  modal: {
    fontFamily: `Playfair Display, Georgia, serif`,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'fixed',
    width: '80%',
    maxWidth: '500px',
  },

};

export default ResponsiveDialog;