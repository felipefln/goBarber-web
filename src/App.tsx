import React from "react";

import GlobalStyle from "./styles/global";
import SignUp from "./pages/SignUp";

const App: React.FC = () => (
    <React.Fragment>
        <SignUp />
        <GlobalStyle />
    </React.Fragment>
);
export default App;
