package pre012.project.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.repository.AnswerRepository;
import pre012.project.exception.BusinessLogicException;
import pre012.project.exception.ExceptionCode;
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
        Question question = findExistsQuestion(questionId);
        question.setViews(question.getViews() + 1);
        return question;
    }

    @Override
    public Question updateQuestion(Long questionId, Question updatedQuestion) {
        Question question = findExistsQuestion(questionId);
        Optional.ofNullable(updatedQuestion.getTitle()).ifPresent(question::setTitle);
        Optional.ofNullable(updatedQuestion.getContent()).ifPresent(question::setContent);
        return questionRepository.save(question);
    }

    @Override
    public void deleteQuestion(Long questionId) {
        Question question = findExistsQuestion(questionId);
        questionRepository.deleteById(questionId);
    }

    @Override
    public List<Answer> getAnswersForQuestion(Question question) {
        return answerRepository.findByQuestion(question);
    }

    // 질문이 존재하는지 확인하는 메서드
    @Override
    public Question findExistsQuestion(Long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        return question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }
}
