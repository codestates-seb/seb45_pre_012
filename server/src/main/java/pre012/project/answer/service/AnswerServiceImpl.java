package pre012.project.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.mapper.AnswerMapper;
import pre012.project.answer.repository.AnswerRepository;
import pre012.project.exception.BusinessLogicException;
import pre012.project.exception.ExceptionCode;
import pre012.project.question.entity.Question;
import pre012.project.question.service.QuestionService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final AnswerMapper mapper;

    @Override
    public AnswerResponseDTO createAnswer(Long questionId, AnswerPostDTO answerPostDTO) {
        Question question = questionService.findExistsQuestion(questionId);
        question.setAnswers(question.getAnswers() + 1);

        Answer answer = mapper.answerPostDTOtoAnswer(answerPostDTO);
        answer.setQuestion(question); // Answer 엔티티 생성 및 연결

        Answer createdAnswer = answerRepository.save(answer);
        return mapper.answerToAnswerResponseDTO(createdAnswer);
    }


    @Override
    public AnswerResponseDTO updateAnswer(Long questionId, Long answerId, AnswerPatchDTO answerPatchDTO) {
        Answer answer = findExistsAnswer(answerId);
        answer.setAnswerContent(answerPatchDTO.getAnswerContent());
        return mapper.answerToAnswerResponseDTO(answer);
    }

    @Override
    public void deleteAnswer(Long answerId) {
        Answer answer = findExistsAnswer(answerId);
        answerRepository.deleteById(answerId);
    }

    @Override
    public Answer getAnswer(Long answerId) {
        return findExistsAnswer(answerId);
    }

    @Override
    public List<AnswerResponseDTO> getAllAnswers() {
        List<Answer> answers = answerRepository.findAll();
        return mapper.answerListToAnswerResponseDTOList(answers);
    }

    @Override
    public Answer findExistsAnswer(Long answerId) {
        Optional<Answer> answer = answerRepository.findById(answerId);
        return answer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
