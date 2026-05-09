import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Spin } from "antd";

function RequireGuest() {
    const { status } = useAppSelector((state) => state.auth);

    if (status === "CHECKING") {
        return <div style={{ textAlign: "center", padding: "40px" }}>
                    <Spin size="large" />
                </div>;
    }

    if (status === "AUTHENTICATED") {
        return (
            <Navigate
                to={"/"}
                replace
            />  
        );
    }

    return <Outlet />;
}

export default RequireGuest;
