import { ConfigProvider } from "antd"
import { ComponentProps } from "react"
export const theme: ComponentProps<typeof ConfigProvider>["theme"] = {
  token: {
    colorPrimary: "#219d98",
  },
  components: {
    Button: {},
  },
}
