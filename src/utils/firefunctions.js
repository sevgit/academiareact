export const fetchQuestions = (dbref) => {
  let questionnaire = dbref.once('value', gotData, errData);
  

  function gotData(data) {
    
    questionnaire = data.val();
    
  }

  function errData(err) {
    questionnaire = undefined
    console.log(err)
  }
  return questionnaire
}

