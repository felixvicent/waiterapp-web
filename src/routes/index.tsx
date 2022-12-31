import { useContext } from "react";

import AuthContext from "../context/auth";
import { AppRoutes } from "./AppRoutes";
import { SignRoutes } from "./SignRoutes";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return user ? <AppRoutes /> : <SignRoutes />;
}
