package pre012.project.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.mapper.AnswerMapper;
import pre012.project.answer.repository.AnswerRepository;
import pre012.project.question.entity.Question;
import pre012.project.question.repository.QuestionRepository;

import javax.transaction.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final AnswerMapper mapper;

    @Override
    public AnswerResponseDTO createAnswer(Long questionId, AnswerPostDTO answerPostDTO) {
        Question question = questionRepository.findById(questionId).orElseThrow();
        question.setAnswers(question.getAnswers() + 1);

        // 매퍼 사용없이 수동으로 넣어준 코드의 결과입니다.
        Answer answer = new Answer();
        answer.setAnswerContent(answerPostDTO.getAnswerContent());
        answer.setQuestion(question); // Answer 엔티티 생성 및 연결

        Answer createdAnswer = answerRepository.save(answer);
        return mapper.answerToAnswerResponseDTO(createdAnswer);
    }

    @Override
    public AnswerResponseDTO updateAnswer(Long questionId, Long answerId, AnswerPatchDTO answerPatchDTO) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        answer.setAnswerContent(answerPatchDTO.getAnswerContent());

        return mapper.answerToAnswerResponseDTO(answer);
    }

    @Override
    public void deleteAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            answerRepository.deleteById(answerId);
        }
    }
}
