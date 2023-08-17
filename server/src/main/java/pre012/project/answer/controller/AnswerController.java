package pre012.project.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.service.AnswerService;

import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions/{question_id}/answers")
public class AnswerController {
    private final AnswerService answerService;

    // 답변 등록
    @PostMapping
    public ResponseEntity postAnswer(@PathVariable("question_id") @Positive Long questionId,
                                     @RequestBody AnswerPostDTO answerPostDTO) {
        AnswerResponseDTO answer = answerService.createAnswer(questionId, answerPostDTO);
        answer.setQuestionId(questionId);
        return new ResponseEntity(answer, HttpStatus.CREATED);
    }
}
