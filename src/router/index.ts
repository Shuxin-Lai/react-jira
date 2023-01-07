import { createBrowserRouter, RouteObject } from "react-router-dom"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { isNil } from "../utils"

function createRouteObject(obj: RouteObject): RouteObject {
  if (isNil(obj.caseSensitive)) {
    obj.caseSensitive = false
  }

  return obj
}

export const routes: RouteObject[] = [
  createRouteObject({
    path: "/",
    id: "home",
    element: Home(),
  }),
  createRouteObject({
    path: "/profile",
    id: "profile",
    element: Profile(),
  }),
]

export const router = createBrowserRouter(routes)
