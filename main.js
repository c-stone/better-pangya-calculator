const shotData ={
  "tomahawk": {
    "1w": {
      "eleEffectPos": 0.63,
      "eleEffectNeg": 0.592,
      "eleVarPos": 1.011,
      "eleVarNeg": 1.011,
      "eleInfPos": 2.7,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.25,
      "windFactorPos": 3,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.0000396,
      "xTerm": -0.0141,
      "constant": 1.64
    },
    "2w": {
      "eleEffectPos": 0.575,
      "eleEffectNeg": 0.535,
      "eleVarPos": 1.011,
      "eleVarNeg": 1.011,
      "eleInfPos": 2.7,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.23,
      "windFactorPos": 3.2,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.0000412,
      "xTerm": -0.00946,
      "constant": 0.849
    }
    "3w": {
      "eleEffectPos": 0.575,
      "eleEffectNeg": 0.535,
      "eleVarPos": 1.011,
      "eleVarNeg": 1.011,
      "eleInfPos": 2.7,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.23,
      "windFactorPos": 3.2,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.0000412,
      "xTerm": -0.00946,
      "constant": 0.849
    }
  },
  "backspin": {
    "1w": {
      "eleEffectPos": 0.755,
      "eleEffectNeg": 0.65,
      "eleVarPos": 1.012,
      "eleVarNeg": 1.013,
      "eleInfPos": 2.7,
      "eleInfNeg": 2.95,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.28,
      "windFactorPos": 4,
      "windFactorNeg": 5.6,
      "windDistFactPos": 0.017,
      "windDistFactNeg": 0.019,
      "xSquared": 0.0000502,
      "xTerm": -0.0177,
      "constant": 2.03
    },
    "2w": {
      "eleEffectPos": 0.728,
      "eleEffectNeg": 0.55,
      "eleVarPos": 1.012,
      "eleVarNeg": 1.014,
      "eleInfPos": 3,
      "eleInfNeg": 2,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.25,
      "windFactorPos": 3.9,
      "windFactorNeg": 5,
      "windDistFactPos": 0.017,
      "windDistFactNeg": 0.019,
      "xSquared": 0.0000412,
      "xTerm": -0.00946,
      "constant": 0.849
    },
    "3w": {
      "eleEffectPos": 0.63,
      "eleEffectNeg": 0.627,
      "eleVarPos": 1.014,
      "eleVarNeg": 1.013,
      "eleInfPos": 4.5,
      "eleInfNeg": 2,
      "eleWindFactPos": 0.98,
      "eleWindFactNeg": 1.3,
      "windFactorPos": 2.75,
      "windFactorNeg": 2.95,
      "windDistFactPos": 0.017,
      "windDistFactNeg": 0.019,
      "xSquared": 0.0000465,
      "xTerm": -0.0102,
      "constant": 0.868
    },
  }
  "dunk": {
    "1w": {
      "eleEffectPos": 0.737,
      "eleEffectNeg": 0.632,
      "eleVarPos": 1.012,
      "eleVarNeg": 1.013,
      "eleInfPos": 2.7,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.25,
      "windFactorPos": 3,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.000014,
      "xTerm": 0.00289,
      "constant": -0.667
    },
    "2w": {
      "eleEffectPos": 0.662,
      "eleEffectNeg": 0.63,
      "eleVarPos": 1.013,
      "eleVarNeg": 1.012,
      "eleInfPos": 2.7,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 1,
      "eleWindFactNeg": 1.23,
      "windFactorPos": 3.2,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.0000724,
      "xTerm": -0.0189,
      "constant": 1.83
    },
    "3w": {
      "eleEffectPos": 0.668,
      "eleEffectNeg": 0.58,
      "eleVarPos": 1.01,
      "eleVarNeg": 1.011,
      "eleInfPos": 2.1,
      "eleInfNeg": 4.25,
      "eleWindFactPos": 0.98,
      "eleWindFactNeg": 1.25,
      "windFactorPos": 3,
      "windFactorNeg": 6.25,
      "windDistFactPos": 0.016,
      "windDistFactNeg": 0.015,
      "xSquared": 0.0000486,
      "xTerm": -0.00914,
      "constant": 0.747
    }
  }
}


function appendResult(text) {
  document.getElementById('result').innerHTML += text;
}
