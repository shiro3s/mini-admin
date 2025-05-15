import {Navigate} from "react-router-dom"

interface Props {
  children: React.ReactNode
}

export const AuthRoute: React.FC<Props> = ({
  children
}) => {
  // not login
  if (0) return <Navigate to="/login" replace />

  return children
}
