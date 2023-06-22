import React from 'react';

import './Button.css';

interface Button extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<Button> = ({ children }) => {
  return <button>{children}</button>;
};
