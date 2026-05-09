import { Navigate, Outlet } from "react-router-dom";
import type { UserRole } from "../../../shared/model/enums";
import { useAppSelector } from "../../store/hooks";
import { Spin } from "antd";

function RequireRole({ allow }: { allow: UserRole[] }) {
    const { status, user } = useAppSelector((state) => state.auth);

    if (status === "CHECKING") {
        return <div style={{ textAlign: "center", padding: "40px" }}>
                    <Spin size="large" />
                </div>;
    }

    if (status !== "AUTHENTICATED" || !user) {
        return <Navigate to="/login" replace />;
    }

    return allow.includes(user.role) ? <Outlet /> : <Navigate to="/403" replace />;
}

export default RequireRole;
