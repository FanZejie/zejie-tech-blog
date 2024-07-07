

import SectionContainer from './SectionContainer';

import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}


const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="relative flex h-screen flex-col justify-between font-sans">
        <Header />
        <main className="mb-auto mt-20">{children}</main>
        
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
