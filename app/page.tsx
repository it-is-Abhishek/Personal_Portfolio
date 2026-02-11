import Navbar from "./navbar";

export default function Home({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
