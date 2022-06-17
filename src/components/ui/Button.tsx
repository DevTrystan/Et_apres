import React, { ReactElement } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactElement | string | number;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {

  const onClick = (text: string) => {
    console.log(`${text}.`);
  };

  return (
    <button className={className} onClick={() => onClick('Coucou')}>
      {children}
    </button>
  );
};

export default Button;
