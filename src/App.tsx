// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { useState } from 'react';

import './App.css';
import ColorBox from './widgets/ColorBox';

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function App() {
  const [counter, updateCounter] = useState(0);

  return (
    <>
      <h1>Dan&apos;s SPA Template</h1>
      <div className="card">
        <button onClick={() => updateCounter((counter) => counter + 1)}>
          The count is [{counter}] (click me to increment!)
        </button>
        <p>
          No, not <a href='https://en.wikipedia.org/wiki/Hot_tub'>that kind</a> of spa,
          but a Single-Page App.
        </p>
        <p>
          Edit the source file <code>src/App.tsx</code> and save it to demonstrate hot-reloading!
        </p>
        <ColorBox isDisabled={counter % 2 === 0} />
      </div>
    </>
  );
}

export default App;
