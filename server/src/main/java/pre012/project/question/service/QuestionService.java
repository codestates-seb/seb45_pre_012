package pre012.project.question.service;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import pre012.project.answer.entity.Answer;
import pre012.project.question.entity.Question;

import java.util.List;

@Service
public interface QuestionService {
    Question createQuestion(Question question);

    List<Question> getAllQuestions();

    Page<Question> getPagingAllQuestions(int page, int size, String recent, String sort);

    Question getQuestion(Long questionId);

    Question updateQuestion(Long questionId, Question question);

    void deleteQuestion(Long questionId);

    List<Answer> getAnswersForQuestion(Question question);

    Question findExistsQuestion(Long questionId);
}