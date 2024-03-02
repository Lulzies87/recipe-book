import { useLoaderData } from "react-router";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export function MainPage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Header />
      <SideBar />
    </>
  );
}
