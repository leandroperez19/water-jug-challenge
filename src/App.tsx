import React, { useState, useRef, FormEvent } from "react";
import solveWaterJugRiddle from "./helpers/solveWaterJugRiddle";
import Action from "./interfaces/Action.interface";

function App() {
  const [tableInfo, setTableInfo] = useState<Action[] | null>(null);
  const xInputRef = useRef<HTMLInputElement>(null);
  const yInputRef = useRef<HTMLInputElement>(null);
  const zInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const x: string | undefined = xInputRef.current?.value;
    const y: string | undefined = yInputRef.current?.value;
    const z: string | undefined = zInputRef.current?.value;
    if (!x || !y || !z) return;

    const info = solveWaterJugRiddle(Number(x), Number(y), Number(z));
    setTableInfo(info);
  };
  

  return (
    <>
      <div className="content">
        <form className="form" onSubmit={onSubmit}>
          <input ref={xInputRef} type="number" min="1" placeholder="X value" />
          <input ref={yInputRef} type="number" min="1" placeholder="Y value" />
          <input ref={zInputRef} type="number" min="1" placeholder="Z value" />
          <button type="submit">Submit</button>
        </form>
        {tableInfo != null ? (
          tableInfo.length > 0 ? (
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  {tableInfo.map((e, i) => (
                    <tr key={i}>
                      <td>{e.xValue}</td>
                      <td>{e.yValue}</td>
                      <td>
                        {i === tableInfo.length - 1
                          ? `${e.explanation} (Solved)`
                          : e.explanation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No solution</p>
          )
        ) : null}
      </div>
    </>
  );
}

export default App;
