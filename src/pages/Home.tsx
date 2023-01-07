import { useMessage } from "@hooks"
import { useTheme } from "@hooks/useTheme"
import { Button } from "antd"

export function Home() {
  const [messageApi, contextHolder] = useMessage()
  const token = useTheme()
  const handleClick = () => {
    console.log("click")
    messageApi.success("ok")
  }
  return (
    <div>
      <div>Home</div>
      <div>theme</div>
      <div>{token.token.colorPrimary}</div>
      <Button onClick={handleClick}>open</Button>
      <Button type={"primary"} onClick={handleClick}>
        open
      </Button>
      <Button onClick={handleClick}>open</Button>
      <div>{contextHolder}</div>
    </div>
  )
}
