import Link from "next/link"

const AccountPage = () => {
  return (
    <>
      Account Page
      <Link
        href={{
          pathname: "/dashboard/accounts",
          query: { modal: "add" },
        }}
      >
        Add
      </Link>
    </>
  )
}

export default AccountPage
