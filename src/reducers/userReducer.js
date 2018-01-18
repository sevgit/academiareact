let initialState = {
    userAnswers: [],
    questionnaire: [],
    step: 0
    
}

export default function reducer(state=initialState, action) {

	switch(action.type){
		case "SET_QUESTIONS": {
			return {...state, questionnaire: action.payload}
		}
		case "ADD_ANSWER": {
			return {...state, userAnswers: [...state.userAnswers, action.payload.answer], step: action.payload.step}
			
		}
		
	}
	return state
	
}