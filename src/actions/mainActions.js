export const addAnswer = (answer) => {
    return {
        type: 'ADD_ANSWER',
        payload: answer,
    }
}

export const setQuestions = (data) => {
    return {
        type: "SET_QUESTIONS",
        payload: data,
    }
}