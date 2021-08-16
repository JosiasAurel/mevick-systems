
import React from "react";

import Header from "../components/Header";

// math tools
import QuadraticSolver from "../tools/quadratic";

const MathToolsPage = () => {
    return (
        <div>
            <Header />
            <div>
                <h2>Quadratic Solver</h2>
                <QuadraticSolver />
            </div>
        </div>
    )
}

export default MathToolsPage;