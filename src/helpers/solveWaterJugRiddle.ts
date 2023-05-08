import Action from "../interfaces/Action.interface";

const solveWaterJugRiddle = (
  X: number,
  Y: number,
  Z: number
): Action[] => {
  const isSomeValueZero = X <= 0 || Y <= 0 || Z <= 0;
  const isZHeigher = Z > X + Y;
  const isSomeValueNotInt =
    !Number.isInteger(X) || !Number.isInteger(Y) || !Number.isInteger(Z);

  if (isSomeValueZero || isSomeValueNotInt || isZHeigher) return [];

  const actions: Action[] = [];
  const visited: Set<string> = new Set();
  const queue: [number, number, Action[]][] = [[0, 0, []]];

  while (queue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [xValue, yValue, path] = queue.shift()!;
    const key = `${xValue}-${yValue}`;

    if (visited.has(key)) continue;
    visited.add(key);

    if (xValue === Z || yValue === Z) {
      actions.push(...path);
      break;
    }

    if (xValue < X) {
      const action: Action = {
        xValue: X,
        yValue,
        explanation: "Fill bucket x",
      };
      queue.push([X, yValue, [...path, action]]);
    }

    if (yValue < Y) {
      const action: Action = {
        xValue,
        yValue: Y,
        explanation: "Fill bucket y",
      };
      queue.push([xValue, Y, [...path, action]]);
    }

    if (xValue > 0) {
      const action: Action = {
        xValue: 0,
        yValue,
        explanation: "Empty bucket x",
      };
      queue.push([0, yValue, [...path, action]]);
    }

    if (yValue > 0) {
      const action: Action = {
        xValue,
        yValue: 0,
        explanation: "Empty bucket y",
      };
      queue.push([xValue, 0, [...path, action]]);
    }

    if (xValue > 0 && yValue < Y) {
      const transferAmount = Math.min(xValue, Y - yValue);
      const action: Action = {
        xValue: xValue - transferAmount,
        yValue: yValue + transferAmount,
        explanation: "Transfer bucket x to bucket y",
      };
      queue.push([
        xValue - transferAmount,
        yValue + transferAmount,
        [...path, action],
      ]);
    }

    if (yValue > 0 && xValue < X) {
      const transferAmount = Math.min(yValue, X - xValue);
      const action: Action = {
        xValue: xValue + transferAmount,
        yValue: yValue - transferAmount,
        explanation: "Transfer bucket y to bucket x",
      };
      queue.push([
        xValue + transferAmount,
        yValue - transferAmount,
        [...path, action],
      ]);
    }
  }

  return actions;
};

export default solveWaterJugRiddle;
