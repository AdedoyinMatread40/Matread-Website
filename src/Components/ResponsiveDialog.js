import React from 'react';

function ResponsiveDialog({ children, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button style={styles.closeButton} onClick={onClose}>Back</button>


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
  closeButton: {
    fontFamily: `Playfair Display, Georgia, serif`,
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
  }
};

export default ResponsiveDialog;