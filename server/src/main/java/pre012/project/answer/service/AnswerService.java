package pre012.project.answer.service;

import org.springframework.stereotype.Service;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;

import java.util.List;

@Service
public interface AnswerService {
    AnswerResponseDTO createAnswer(Long questionId, AnswerPostDTO answerPostDTO);

    AnswerResponseDTO updateAnswer(Long questionId, Long answerId, AnswerPatchDTO answerPatchDTO);

    void deleteAnswer(Long answerId);

    Answer findVerifiedAnswer(Long answerId);

    Answer getAnswer(Long answerId);

    List<AnswerResponseDTO> getAllAnswers();
}