let initialState = {
    userAnswers: [],
    questionnaire: [],
    step: 0
    
}

export default function reducer(state=initialState, action) {

	switch(action.type){
		case "FETCH_QUESTIONS": {
			return {...state, questionnaire: []}
		}
		case "ADD_ANSWER": {
			return {...state, userAnswers: [...state.userAnswers, action.payload], step: state.step +1}
			
		}
		
	}
	return state
	
}