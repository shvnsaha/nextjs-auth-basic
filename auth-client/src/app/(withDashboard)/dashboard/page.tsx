import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {

  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">Logged in email {session?.user?.email}</h1>
       <Image className="mx-auto" src={session?.user?.image as string} alt="user image" width={100} height={100}/>
    </div>
  );
};

export default DashboardPage;
