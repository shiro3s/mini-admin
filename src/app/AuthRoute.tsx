import {Navigate} from "react-router-dom"
import {useAppSelector} from "@/libs/redux"

interface Props {
  children: React.ReactNode
}

export const AuthRoute: React.FC<Props> = ({
  children
}) => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuth) return children

  return <Navigate to="/login" replace />
}
