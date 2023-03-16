import Header from "./components/Header";
import Form from "./components/Form";
import Output from "./components/Output";
import { ResetButton } from "./components/Button";

function App() {
  return (
    <div className="bg-primary-Light-grayish-cyan pb-44 font-b">
      <Header/>
      <main className="m-auto rounded-xl bg-primary-White grid md:grid-cols-2 overflow-hidden mx-10 md:w-3/5 md:mx-auto">
        <section className="p-7">
          <Form/>
        </section>
        <section className="bg-primary-Very-dark-cyan p-7 m-7 rounded-xl">
          <Output label='Tip Amount' amount="$0.00"/>
          <Output label='Total' amount="$0.00"/>
          <ResetButton/>
        </section>
      </main>
    </div>
  );
}

export default App;
