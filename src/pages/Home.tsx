import { useTheme } from "@hooks/useTheme"
import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { fetchUserById } from "store/features/authSlice"

export function Home() {
  // const [messageApi, contextHolder] = useMessage()

  const dispatch = useDispatch()
  const { user: user } = useSelector((state: RootState) => state.auth)

  const token = useTheme()
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchUserById())
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
      <Button onClick={handleClick}>login</Button>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}
