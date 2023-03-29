
import Quiz from './component/Quiz.js';
import { useRef, useState } from 'react';
import './App.css';
import questionData from './component/QuizData.js';

function App() {

  let [finalResult, setFinalResult] = useState(0);
  const [question, setQuestion] = useState([questionData[0]]);
  const [qnaId, setQnaId] = useState(2);
  const [check, setCheck] = useState(false);
  let result = useRef(0);
  let rValue = "";

  function handleNext(qid) {
    const tempQna = questionData.filter((element) => element.Flag == qid);

    // console.log(tempQna);
    setQuestion([...tempQna]);
    setQnaId(qid + 1);

  }



  function handleSubmit(result) {
    // console.log(tempValue);

    setFinalResult(result);

  }

  function handleSubmit1() {
    setCheck(true)
  }
  
  function handleRestart() {
    setQuestion([questionData[0]]);
    setQnaId(1);
    setFinalResult(0);
    setCheck(false)
  }


  return (
    <>
      <h1 className='heading'>Quiz</h1>
      <div className='mainDiv'>
        {(check && ((finalResult >= 12) ? <h1>Congratulation {finalResult * 2}/20</h1> :
          <div className='failedDiv'>
            <h1> Try Again {finalResult * 2}/20</h1>
            <button onClick={handleRestart}>Restart</button>
          </div>))}
        {
          question.map((data, index) => {
            return (<div key={index}>
              <Quiz key={index} Question={data.Question} Options={data.Options} cAnswer={data.Correct_Answer} Flag={data.Flag} handleSubmit={handleSubmit} />
              {(data.Flag != 10) ? <button onClick={() => handleNext(qnaId)}>Next</button> : <button onClick={handleSubmit1}>Submit</button>}
            </div>
            )
          })
        }


      </div>
    </>
  );
}

export default App;