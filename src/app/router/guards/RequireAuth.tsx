import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Spin } from "antd";

function RequireAuth() {
    const { status } = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (status === "CHECKING") {
        return <div style={{ textAlign: "center", padding: "40px" }}>
                    <Spin size="large" />
                </div>;
    }

    return status === "AUTHENTICATED" ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
}

export default RequireAuth;
