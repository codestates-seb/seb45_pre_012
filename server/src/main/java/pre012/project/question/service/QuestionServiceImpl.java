package pre012.project.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.repository.AnswerRepository;
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
    private final AnswerRepository answerRepository;

    @Override
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public Page<Question> getPagingAllQuestions(int page, int size, String recent, String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, recent));
        return questionRepository.findAll(pageable);
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
        Question question = questionRepository.findById(questionId).orElse(null);
        if (question != null) {
            questionRepository.deleteById(questionId);
        }
    }

    @Override
    public List<Answer> getQuestionAnswers(Question question) {
        return answerRepository.findAllByQuestion(question);
    }
}
