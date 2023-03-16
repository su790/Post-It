import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth";
import {authOptions} from "../../pages/api/auth/[...nextauth]"
async function Nav() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="text-bold text-lg">Send it.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  );
}

export default Nav;
