import {useState} from 'react'; //import
function ReadyButton() {
 const [count, setCount] = useState(0);

 function incrementCount(){
  setCount(count+4);
 }
 function dropCount(){
    setCount(count-5);
 }

 return(
    <>
      <button onClick={incrementCount}>
        INCREMENT
      </button>
      <p>{count}</p>
      <button onClick={dropCount}>
        DECREMENT
      </button>
    </>

 );
}
export default ReadyButton;