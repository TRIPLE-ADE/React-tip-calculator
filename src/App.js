import Header from "./components/Header";
import Form from "./components/Form";
import Output from "./components/Output";
import { ResetButton } from "./components/Button";
import { useState} from 'react';

function App() {
  const initialInputValue = {
    bill : "",
    people:"",
    custom:"",
  }

  const [peopleInputError, setPeopleInputError] = useState(false);

  let tipAmount;
  let totalAmount;

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [tipAmountValue, setTipAmountValue] = useState('0.00');
  const [totalAmountValue, setTotalAmountValue] = useState('0.00');

  const {bill, people, custom} = inputValue;
  
  const handleChange = e => {
  let name = e.target.name;
  let value = e.target.value;
  const updatedValue = {
    ...inputValue, [name] : value
  }
  setInputValue(updatedValue)

  if (name === "custom" && bill !== '' && people !== '') {
    
    tipAmount = ((Number(bill) * Number(value / 100)) / Number(people)).toFixed(
      2
    );
    totalAmount = (
      (Number(bill) * Number(value / 100) + Number(bill)) /
      Number(people)
    ).toFixed(2);

    (!isFinite(tipAmount) || isNaN(tipAmount)) ? setTipAmountValue(tipAmountValue) : setTipAmountValue(tipAmount);
    (!isFinite(totalAmount) || isNaN(totalAmount)) ? setTotalAmountValue(totalAmountValue) : setTotalAmountValue(totalAmount);
  }   
  // else{
  //   setPeopleInputError(peopleInputError)
  //   console.log('No bill and people value')
  // }
    
}
  
  const handleTipClick = (e) => {
     if (bill !== "" && people !== ""){
      tipAmount = (
        (Number(bill) * Number(e.target.value)) /
        Number(people)
      ).toFixed(2);
      totalAmount = (
        (Number(bill) * Number(e.target.value) + Number(bill)) /
        Number(people)
      ).toFixed(2);
       !isFinite(tipAmount) || isNaN(tipAmount)
         ? setTipAmountValue(tipAmountValue)
         : setTipAmountValue(tipAmount);
       !isFinite(totalAmount) || isNaN(totalAmount)
         ? setTotalAmountValue(totalAmountValue)
         : setTotalAmountValue(totalAmount);
      setInputValue(initialInputValue);
     }
  }

  const handleResetButton = () => {
    setInputValue(initialInputValue)
    setTipAmountValue('0.00')
    setTotalAmountValue('0.00')
  }
  return (
    <div className="bg-primary-Light-grayish-cyan pb-44 font-body">
      <Header />
      <main className="m-auto rounded-xl bg-primary-White grid md:grid-cols-2 overflow-hidden mx-2 md:w-3/5 md:mx-auto sm:w-[70%] sm:m-auto">
        <section className="p-7">
          <Form
            onChange={handleChange}
            billValue={bill}
            peopleValue={people}
            customValue={custom}
            onClick={handleTipClick}
            setPeopleInputError={()=>setPeopleInputError(peopleInputError)}
      
          />
        </section>
        <section className="bg-primary-Very-dark-cyan p-7 my-7 mx-7 md:ml-0 md:mr-7 rounded-xl">
          <Output label="Tip Amount" amount={tipAmountValue} />
          <Output label="Total" amount={totalAmountValue} />
          <ResetButton onClick={handleResetButton} />
        </section>
      </main>
    </div>
  );
}

export default App;
