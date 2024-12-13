import classnames from 'classnames';

import './index.scss';

/**
 * "type" — corresponds to a relating part of speech
 * 'noun', 'interjection', 'preposition', 'conjunction',
 * 'verb', 'adverb', 'adjective', 'various'
 * 'default' - gray pill
 */

type PillType = {
  children: React.ReactNode;
  type: string;
  className?: string | string[];
};

export const Pill: React.FC<PillType> = ({
  children,
  type = 'default',
  className,
}) => (
  <div
    className={classnames(
      'pill',
      Array.isArray(className) ? className.join(' ') : className,
      `pill--${type}`
    )}
  >
    {children}
  </div>
);
