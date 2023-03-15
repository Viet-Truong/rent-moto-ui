import { Children } from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
    return (
        <div className={"wrapper"}>
            <Header />
            <div className={"container"}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
