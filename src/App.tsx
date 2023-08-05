import { ReactNode } from 'react';

import classes from './App.module.scss';

const App = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.appContainer}>
      {children}
    </div>
  );
};

export default App;
