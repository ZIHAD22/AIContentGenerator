import React, { useEffect, useState } from 'react';
import getDataFromApi from '../../utils/getDataFromApi';

const Home = () => {
    const [askingQuestion, setAskingQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const handleAskQuestionChange = (e) => {
        setAskingQuestion(e.target.value)
    }

    // console.log(askingQuestion);
    // useEffect(() => {
    //     
    // }, [askingQuestion])

    const handleSearchQuestion = async () => {
        if (askingQuestion) {
            const result = await getDataFromApi(askingQuestion)
            setAnswer(result.data.choices[0].text)
        }
    }
    return (
        <div>
            <div className='container'>
                <h1>Let AI generate your thought</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell me a short line</label>
                    <textarea onChange={handleAskQuestionChange} value={askingQuestion} onKeyDown={(e) => e.key === 'Enter' && handleSearchQuestion()} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Here is your result</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={answer} rows="3"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Home;