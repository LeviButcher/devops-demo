import withLayout from "../components/Layout";
import Calculator from "../components/Calculator";

function Home() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default withLayout(Home);
