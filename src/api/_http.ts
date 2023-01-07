import axios from "axios"
import type { CreateAxiosDefaults, AxiosInstance, AxiosRequestConfig } from "axios"
import { HttpMethod } from "../enums"
import { clone, deepMerge, shallowMerge } from "../utils"

export interface RHttpConfig extends CreateAxiosDefaults {
  interceptors?: any
  showLoading?: boolean
  showErrorMessage?: boolean
  errorMessageConfig?: any
  withTimestamp?: boolean
}

export interface RHttpRequestConfig extends Omit<AxiosRequestConfig, "params" | "data"> {
  payload?: RHttpPayload
}

export type RHttpPayload = Recordable

export class RHttp {
  private axios: AxiosInstance
  constructor(config: RHttpConfig) {
    this.axios = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    throw new Error("Method not implemented.")
  }

  private mergePayload(p1?: RHttpPayload, p2?: RHttpPayload): RHttpPayload | undefined {
    if (!p2) {
      return p1
    }
    if (!p1) {
      return p2
    }

    return deepMerge({}, p1, p2)
  }

  private mergetConfig(payload: RHttpPayload, config: RHttpRequestConfig) {
    config = clone(config)
    config.payload = this.mergePayload(payload, config.payload)
    return config
  }

  private normalizeConfig(config: RHttpRequestConfig) {
    const { method = HttpMethod.GET, payload } = config
    const conf = clone(config) as AxiosRequestConfig

    if (method == HttpMethod.GET) {
      conf.params = payload
    } else {
      conf.data = payload
    }
    return conf
  }

  get<T>(url: string, payload: RHttpPayload = {}, config: RHttpRequestConfig = {}) {
    return this.request<T>(HttpMethod.GET, url, this.mergetConfig(payload, config))
  }

  post<T>(url: string, payload: RHttpPayload = {}, config: RHttpRequestConfig = {}) {
    return this.request<T>(HttpMethod.POST, url, this.mergetConfig(payload, config))
  }

  put<T>(url: string, payload: RHttpPayload = {}, config: RHttpRequestConfig = {}) {
    return this.request<T>(HttpMethod.PUT, url, this.mergetConfig(payload, config))
  }

  remove<T>(url: string, payload: RHttpPayload = {}, config: RHttpRequestConfig = {}) {
    return this.request<T>(HttpMethod.DELETE, url, this.mergetConfig(payload, config))
  }

  request<T>(method: HttpMethod, url: string, config: RHttpRequestConfig): Promise<T> {
    const conf = this.normalizeConfig(shallowMerge(config, { method, url }))
    return this.axios.request(conf)
  }
}

export const defaultConfig: RHttpConfig = {}

export function createRHttp(config: RHttpConfig = defaultConfig) {
  return new RHttp(config)
}

export const defaultRHttp = createRHttp()
