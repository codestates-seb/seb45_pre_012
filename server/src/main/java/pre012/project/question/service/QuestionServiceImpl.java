package pre012.project.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import pre012.project.question.entity.Question;
import pre012.project.question.repository.QuestionRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    @Override
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public Question getQuestion(Long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(NullPointerException::new);
        question.setViews(question.getViews() + 1);
        return question;
    }

    @Override
    public Question updateQuestion(Long questionId, Question question) {
        return questionRepository.findById(questionId)
                .map(findQuestion -> {
                    Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
                    Optional.ofNullable(question.getContent()).ifPresent(findQuestion::setContent);
                    return questionRepository.save(findQuestion);
                })
                .orElseThrow();
    }

    @Override
    public void deleteQuestion(Long questionId) {

    }
}
