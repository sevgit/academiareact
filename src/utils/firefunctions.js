export const fetchQuestions = (dbref) => {
  let preguntas = dbref.once('value', gotData, errData);
  

  function gotData(data) {
    console.log(data.val())
    preguntas = data.val();
  }

  function errData(err) {
    preguntas = undefined
    console.log(err)
  }
  return preguntas
}

