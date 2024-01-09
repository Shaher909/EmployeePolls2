const { _saveQuestion } = require('./_DATA');
const { _saveQuestionAnswer } = require('./_DATA');

//test #1
describe('_DATA _saveQuestion function - Success Case', () => {
    test('it should save a question and return the saved question', async () => {
      // Arrange
      const questionData = {
        optionOneText: 'First option',
        optionTwoText: 'Second option',
        author: 'user123',
      };
  
      // Act
      const savedQuestion = await _saveQuestion(questionData);
  
      // Assert
      expect(savedQuestion).toBeDefined();
      expect(savedQuestion.id).toBeDefined();
      expect(savedQuestion.timestamp).toBeDefined();
      expect(savedQuestion.optionOne).toEqual({
        votes: [],
        text: 'First option',
      });
      expect(savedQuestion.optionTwo).toEqual({
        votes: [],
        text: 'Second option',
      });
      expect(savedQuestion.author).toBe('user123');
    });
  });

  //test #2
  describe('_DATA _saveQuestion function - Error Case', () => {
    test('it should reject the promise with an error message if required fields are missing', async () => {
      // Arrange
      const incorrectQuestionData = {
        optionOneText: 'First option',
        optionTwoText: 'Second option',
        author: undefined,
      };
  
      // Act & Assert
      await expect(_saveQuestion(incorrectQuestionData)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
  });
 
//test #3
describe('_DATA _saveQuestionAnswer function - Success Case', () => {
  test('it should save a question answer and return true', async () => {
    // Arrange
    const authedUser = 'sarahedo';
    const qid = '8xf0y6ziyjabvozdd253nd';
    const answer = 'optionOne';

    // Act
    const result = await _saveQuestionAnswer({ authedUser, qid, answer });

    // Assert
    expect(result).toBe(true);

  });
});

// Test #4 
describe('_DATA _saveQuestionAnswer function - Error Case', () => {
    test('it should reject the promise with an error message if authedUser is not a valid user', async () => {
      // Arrange
      const incorrectData = {
        authedUser: undefined,
        qid: undefined,
        answer: undefined,
      };
  
      // Act & Assert
      await expect(_saveQuestionAnswer(incorrectData)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
  });
  

  