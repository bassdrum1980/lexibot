import React from 'react';
import './bg-container.scss';

const backgroundClasses = ['default', 'default-gray', 'search', 'search-gray'];

export const StorybookBgContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const getClassNames = (name: string): string => {
    const theme = `theme-${name.split('-')[0]}`;
    const container = `storybook-bg-container storybook-bg-container--${name}`;

    return `${container} ${theme}`;
  };

  return (
    <div>
      {backgroundClasses.map((name) => (
        <div
          className={getClassNames(name)}
          key={name}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
