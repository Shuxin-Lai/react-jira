import { isNil } from "../utils"
import { defaultRHttp } from "./_http"

type Urls = Recordable<string | Nil>

function normalizeUrls<T = Urls>(urls: T): { [key in keyof T]: string } {
  const res = { ...urls } as any

  Object.keys(res).forEach((key) => {
    if (isNil(res[key])) {
      res[key] = `/${key}`
    }
  })

  return res
}

const urls = normalizeUrls({
  login: null,
  register: null,
  profile: null,
})

export const UserApis = {
  login(payload: any) {
    return defaultRHttp.post(urls.login, payload)
  },
  register(payload: any) {
    return defaultRHttp.post(urls.register, payload)
  },
  profile(payload: any) {
    return defaultRHttp.post(urls.profile, payload)
  },
}
