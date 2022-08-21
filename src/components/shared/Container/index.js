import './index.scss';

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Container.displayName = 'Container';

export default Container;
