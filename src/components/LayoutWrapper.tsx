

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
      <div className=" flex flex-col h-full  justify-between font-sans xl:max-w-5xl xl:px-0  mx-auto bg-slate-50   dark:bg-gray-900 ">
        <Header />
        <main className="mb-auto mt-20">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
