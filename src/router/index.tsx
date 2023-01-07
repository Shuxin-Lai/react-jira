import { createBrowserRouter, RouteObject, Outlet } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { NotFound } from "../pages/404"
import { ErrorPage } from "../pages/ErrorPage"
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
    element: (
      <DefaultLayout>
        <Outlet></Outlet>
      </DefaultLayout>
    ),
    errorElement: (
      <DefaultLayout>
        <ErrorPage />
      </DefaultLayout>
    ),
    children: [
      createRouteObject({
        path: "/",
        id: "home",
        element: <Home />,
      }),
      createRouteObject({
        path: "/profile",
        id: "profile",
        element: <Profile />,
      }),
      createRouteObject({
        path: "*",
        id: "notFound",
        element: <NotFound />,
      }),
    ],
  }),
]

export const router = createBrowserRouter(routes)
