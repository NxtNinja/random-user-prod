import DisplayCards from "@/components/DisplayCards";
import Nav from "@/components/Nav";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <DisplayCards />
      </div>
    </>
  );
};

export default index;
