import Header from "./components/Header";
import Form from "./components/Form";
import Output from "./components/Output";
import { ResetButton } from "./components/Button";

function App() {
  return (
    <div className="bg-primary-Light-grayish-cyan pb-44">
      <Header />
      <main className="m-auto rounded-xl bg-primary-White grid gap-x-4 grid-cols-2 overflow-hidden">
        <section className="py-4">
          <Form />
        </section>
        <section className=" bg-primary-Very-dark-cyan px-8">
          <Output label="Tip Amount" amount="$0.00" />
          <Output label="Total" amount="$0.00" />
          <ResetButton />
        </section>
      </main>
    </div>
  );
}

export default App;
