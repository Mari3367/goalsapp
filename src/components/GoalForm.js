import {useState} from 'react';

const GoalForm = (props) => {
    const[formData, setFormData] = useState({
        goal: '',
        by: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: '', by: ''});
    }

    // const handleInputClick = (e) => {
    //     console.log(e.target.styel={})
    // }
    
    return(
        <div className='form-container'>
            <h1>Future Goals</h1>
              <form onSubmit={submitHandler}>
                <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={handleChange} />
                <input type='text' name='by' placeholder='By...' value={formData.by} onChange={handleChange} />
                <button className='goal-submit-button'>Submit Goal</button>
              </form>
            </div>
    );
};

export default GoalForm;