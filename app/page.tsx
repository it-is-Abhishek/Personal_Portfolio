import Navbar from "./components/navbar";
import Body from "./components/body";

export default function Home({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <>
      <Navbar />
      {children}
      <Body/>
    </>
  );
}
