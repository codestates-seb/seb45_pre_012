package pre012.project.question.service;

import org.springframework.stereotype.Service;
import pre012.project.question.entity.Question;

import java.util.List;

@Service
public interface QuestionService {
    Question createQuestion(Question question);

    List<Question> getAllQuestions();

    Question getQuestion(Long questionId);

    Question updateQuestion(Long questionId, Question question);
}