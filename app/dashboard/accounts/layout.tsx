"use client"
import { useSearchParams} from "next/navigation";
import { PropsWithChildren } from "react";

const AccountLayout = ({ children }: PropsWithChildren) => {
  const searchParams = useSearchParams()
  const modal = searchParams.get("modal")
  return (
    <>
      <p>layou</p>
      {children}
      <p>{!!modal ? "modal is open" : ""}</p>
    </>
  )
}

export default AccountLayout
