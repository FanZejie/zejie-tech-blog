

import SectionContainer from './SectionContainer';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}


const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="relative flex h-screen flex-col justify-between font-sans xl:max-w-5xl xl:px-0  mx-auto">
        <Header />
        <main className="mb-auto mt-20">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
