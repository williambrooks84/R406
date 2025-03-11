import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar"; // Import the actual NavBar component

export default function Root() {
  return (
    <>
      <NavBar/>
      <section>
        <Outlet/>
      </section>
    </>
  );
}
