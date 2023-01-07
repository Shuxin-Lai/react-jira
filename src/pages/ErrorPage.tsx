import { useRouteError } from "react-router-dom"

export function ErrorPage() {
  const error = useRouteError() as Error
  return <div>{error.message}</div>
}
