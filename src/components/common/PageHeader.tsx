import { FC } from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
      {title}
    </h2>
  );
};

export default PageHeader;