import solveWaterJugRiddle from "../helpers/solveWaterJugRiddle";

describe("solveWaterJugRiddle", () => {
  it("returns an empty array when any value is zero", () => {
    expect(solveWaterJugRiddle(0, 5, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 0, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 5, 0)).toMatchObject([]);
  });

  it("returns an empty array when any value is not an integer", () => {
    expect(solveWaterJugRiddle(1.5, 5, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 3.2, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 5, 2.8)).toMatchObject([]);
  });

  it("returns an empty array when Z is higher than the sum of X and Y", () => {
    expect(solveWaterJugRiddle(3, 4, 8)).toMatchObject([]);
    expect(solveWaterJugRiddle(5, 5, 12)).toMatchObject([]);
    expect(solveWaterJugRiddle(7, 2, 10)).toMatchObject([]);
  });

  it("returns an empty array when X, Y, or Z are equal to zero", () => {
    expect(solveWaterJugRiddle(0, 5, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 0, 3)).toMatchObject([]);
    expect(solveWaterJugRiddle(4, 5, 0)).toMatchObject([]);
  });

  it("returns the correct actions to solve the water jug riddle", () => {
    const result = solveWaterJugRiddle(2, 10, 4);
    expect(result).toEqual([
      {
          "xValue": 2,
          "yValue": 0,
          "explanation": "Fill bucket x"
      },
      {
          "xValue": 0,
          "yValue": 2,
          "explanation": "Transfer bucket x to bucket y"
      },
      {
          "xValue": 2,
          "yValue": 2,
          "explanation": "Fill bucket x"
      },
      {
          "xValue": 0,
          "yValue": 4,
          "explanation": "Transfer bucket x to bucket y"
      }
  ]);
  const result2 = solveWaterJugRiddle(10,2,4);
  expect(result2).toEqual([
    {
        "xValue": 0,
        "yValue": 2,
        "explanation": "Fill bucket y"
    },
    {
        "xValue": 2,
        "yValue": 0,
        "explanation": "Transfer bucket y to bucket x"
    },
    {
        "xValue": 2,
        "yValue": 2,
        "explanation": "Fill bucket y"
    },
    {
        "xValue": 4,
        "yValue": 0,
        "explanation": "Transfer bucket y to bucket x"
    }
  ]);
  const result3 = solveWaterJugRiddle(4,16,4);
  expect(result3).toEqual([
    {
        "xValue": 4,
        "yValue": 0,
        "explanation": "Fill bucket x"
    }
  ])
  const result4 = solveWaterJugRiddle(16,4,4);
  expect(result4).toEqual([
    {
        "xValue": 0,
        "yValue": 4,
        "explanation": "Fill bucket y"
    }
  ])
  });
});
