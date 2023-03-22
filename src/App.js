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

  let tipAmount;
  let totalAmount;

  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [tipAmountValue, setTipAmountValue] = useState('0.00');
  const [totalAmountValue, setTotalAmountValue] = useState('0.00');
  const [peopleError, setPeopleError] = useState(false);
  const [billError, setBillError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [peopleErrorMessage, setPeopleErrorMessage] = useState(false);
  const [billErrorMessage, setBillErrorMessage] = useState(false);
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
    if(people === "" && bill === "") {
       setInputError(true);
       setErrorMessage(true);
       handleResetButton();
      }else if(bill !== "" && people === ""){
        setPeopleError(true);
        setPeopleErrorMessage(true);
        handleResetButton();
      }else if(bill === "" && people !==""){
        setBillError(true)
        setBillErrorMessage(true)
        handleResetButton();
      }else{
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
    setTimeout(()=>{
      setInputValue(initialInputValue);
      setTipAmountValue("0.00");
      setTotalAmountValue("0.00");
      setBillError(billError);
      setPeopleError(peopleError);
      setInputError(inputError);
      setErrorMessage(errorMessage);
      setBillErrorMessage(billErrorMessage);
      setPeopleErrorMessage(peopleErrorMessage)
    }, 1000)
    
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
            setInputError={inputError}
            setPeopleError={peopleError}
            setBillError={billError}
            setErrorMessage={errorMessage}
            setPeopleErrorMessage={peopleErrorMessage}
            setBillErrorMessage={billErrorMessage}
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
