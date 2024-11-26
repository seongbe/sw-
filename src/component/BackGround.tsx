// components/CommonLayout.tsx
import React from 'react';
import Container from '../styles/components/Containerstyled';

type CommonLayoutProps = {
  children: React.ReactNode;
};

const BackGround: React.FC<CommonLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BackGround;