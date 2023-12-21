import React , { useState }from 'react';
import CareerForm from './CareerForm';

function useShareableState ({setOpen}) {
    const [open, setOpen] = useState(false);
    return <>
      <CareerForm ope/>
      </>
};

export default useShareableState;