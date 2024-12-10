import { FC, PropsWithChildren } from 'react';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default PageLayout;