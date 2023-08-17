package pre012.project.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
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
        question.incrementAnswers(); // Question 엔티티에 대한 변경

        Answer answer=  mapper.answerPostDTOtoAnswer(answerPostDTO);
        answer.setQuestion(question); // Answer 엔티티 생성 및 연결

        Answer createdAnswer = answerRepository.save(answer);
        return mapper.answerToAnswerResponseDTO(createdAnswer);
    }
}
