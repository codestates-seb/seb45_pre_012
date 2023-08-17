package pre012.project.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.service.AnswerService;
import pre012.project.question.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

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

        URI location = UriCreator.createUri("/questions" + questionId + "/answers", answer.getQuestionId());
        return ResponseEntity.created(location).body(answer);
    }

    // 답변 수정
    @PatchMapping("/edit/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("question_id") @Positive Long questionId,
                                      @PathVariable("answer_id") @Positive Long answerId,
                                      @Valid @RequestBody AnswerPatchDTO answerPatchDTO) {
        AnswerResponseDTO answer = answerService.updateAnswer(questionId, answerId, answerPatchDTO);
        answer.setQuestionId(questionId);
        return new ResponseEntity(answer, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("question_id") @Positive Long questionId,
                                       @PathVariable("answer_id") @Positive Long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
