import React from 'react';
import './index.scss';

const backgroundClasses = ['study', 'study-gray', 'search', 'search-gray'];

const StorybookBgContainer = ({ children }: { children: React.ReactNode }) => (
  <div>
    {backgroundClasses.map((name) => (
      <div
        className={`storybook-bg-container storybook-bg-container--${name}`}
        key={name}
      >
        {children}
      </div>
    ))}
  </div>
);

export default StorybookBgContainer;
