import Header from "./components/Header";
import Form from "./components/Form";
import Output from "./components/Output";

function App() {
  return (
    <div className="bg-primary-Light-grayish-cyan pb-44 font-body">
      <Header/>
      <main className=" w-3/5 m-auto rounded-xl bg-primary-White grid grid-cols-2 overflow-hidden">
        <section className="p-7">
          <Form/>
        </section>
        <section className="bg-primary-Very-dark-cyan p-7">
          <Output label='Tip Amount' amount="0.00"/>
          <Output label='Total' amount="0.00"/>
        </section>
      </main>
    </div>
  )
}

export default App;
