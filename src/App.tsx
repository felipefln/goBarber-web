import React from "react";

import GlobalStyle from "./styles/global";
import SignIn from "./pages/SignIn";

const App: React.FC = () => (
    <React.Fragment>
        <SignIn />
        <GlobalStyle />
    </React.Fragment>
);
export default App;
