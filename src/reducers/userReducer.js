let initialState = {
    userAnswers: [1,2,3],
    preguntas: [],
    step: 0
    
}

export default function reducer(state=initialState, action) {

	switch(action.type){
		case "ADD_ANSWER": {
			return {...state, userAnswers: action.payload}
			
		}
		
	}
	return state
	
}