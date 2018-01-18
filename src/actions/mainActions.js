export const addAnswer = (answer, step) => {

    if (step >= 29) {
        return {
            type: 'ADD_ANSWER',
            payload: {answer: answer, step: step },
        }
    }
    return {
        type: 'ADD_ANSWER',
        payload: {answer: answer, step: step + 1 },
    }
}

export const setQuestions = (data) => {
    return {
        type: "SET_QUESTIONS",
        payload: data,
    }
}