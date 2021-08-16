import React, { useState } from "react";

import styles from "../styles/tools.module.css";

const QuadraticSolver = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const [solution, setSolution] = useState();

    const handleChange = (event, handler) => handler(event.target.value);

    function computeSolutions(a, b, c) {
        if (a === 1) {
            // everything is gonna be fine
            const midPoint = b/2;
            if ((Math.pow(midPoint, 2) - c) > 0) {
                const eqDistance = Math.sqrt(Math.pow(midPoint, 2) - c);
                return [midPoint-eqDistance, midPoint+eqDistance];
            } else {
                const eqDistance = `&radic;${Math.pow(midPoint, 2) - c}<i>i</i>`;
                return [`${midPoint}-${eqDistance}`, `${midPoint}+${eqDistance}`]
            }
        } else {

            // normalize equation ?
            b = b/a;
            c = c/a;

            // do the math ;)
            const midPoint = b/2;
            if ((Math.pow(midPoint, 2) - c) > 0) {
                const eqDistance = Math.sqrt(Math.pow(midPoint, 2) - c);
                return [midPoint-eqDistance, midPoint+eqDistance];
            } else {
                const eqDistance = `&radic;${Math.pow(midPoint, 2) - c}<i>i</i>`;
                return [`${midPoint}-${eqDistance}`, `${midPoint}+${eqDistance}`]
            }
        }
        
    }

    function computeEffect() {
        if (a === 0) {
            alert("This is not a quadratic equation");
            return;
        }

        const result = computeSolutions(a, b, c);
        setSolution(`x = ${result[0]} <br /> x = ${result[1]}`);
        // console.log(result);
        return;
    }

    function clearInputAndSolution() {
        setA(0);
        setB(0);
        setC(0);
        setSolution();
    }

    return (
        <div className={styles.quadraticSolverCn}>
            <h1 style={{fontWeight: "bolder", fontSize: "2em"}}>Quadratic Solver</h1>
            <div className={styles.qudraticSolverControls}>
                <input value={a} onChange={e => handleChange(e, setA)} type="number" placeholder="Coefficient of x²" />
                <input value={b} onChange={e => handleChange(e, setB)} type="number" placeholder="Coefficient of x" />
                <input value={c} onChange={e => handleChange(e, setC)} type="number" placeholder="Constant" />
                <button onClick={() => computeEffect()}>
                    Compute
                </button>
            </div>
            <div dangerouslySetInnerHTML={{__html: solution}}>
            </div>
            <button onClick={() => clearInputAndSolution()} className={styles.qsClear}>
                Clear
            </button>
        </div>
    )
}

export default QuadraticSolver;