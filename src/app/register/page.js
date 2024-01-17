import Register from "../../../src/app/components/register"
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route";

const registerPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/login");
  }

  return (
    <div>
        <Register />
    </div>
  )
}

export default registerPage;