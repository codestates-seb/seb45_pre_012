package pre012.project.answer.service;

import org.springframework.stereotype.Service;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;

@Service
public interface AnswerService {
    AnswerResponseDTO createAnswer(Long questionId, AnswerPostDTO answerPostDTO);
}

