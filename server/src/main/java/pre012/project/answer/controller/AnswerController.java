package pre012.project.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.mapper.AnswerMapper;
import pre012.project.answer.service.AnswerService;
import pre012.project.like.service.LikeService;
import pre012.project.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions/{question_id}/answers")
public class AnswerController {
    private final AnswerService answerService;
    private final LikeService likeService;
    private final AnswerMapper answerMapper;

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

    // answer_id 로 답변 조회
    @GetMapping("/{answer_id}")
    public ResponseEntity getAnswer(@PathVariable("question_id") @Positive Long questionId,
                                    @PathVariable("answer_id") @Positive Long answerId) {
        Answer answer = answerService.getAnswer(answerId);
        AnswerResponseDTO answerResponseDTO = answerMapper.answerToAnswerResponseDTO(answer);
        return new ResponseEntity(answerResponseDTO, HttpStatus.OK);
    }

    // question_id 에 달린 모든 답변 조회
    @GetMapping
    public ResponseEntity<List<AnswerResponseDTO>> getAllAnswers(@PathVariable("question_id") @Positive Long questionId) {
        List<AnswerResponseDTO> answers = answerService.getAllAnswers();
        return new ResponseEntity<>(answers, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("question_id") @Positive Long questionId,
                                       @PathVariable("answer_id") @Positive Long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    // 채택 등록 (true)
    @PostMapping("/{answer_id}/like")
    public ResponseEntity liked(@PathVariable("question_id") @Positive Long questionId,
                                @PathVariable("answer_id") @Positive Long answerId) {
        Answer likedAnswer = likeService.createLike(answerId, questionId);
        AnswerResponseDTO answerResponseDTO = answerMapper.answerToAnswerResponseDTO(likedAnswer);
        answerResponseDTO.setLiked(true);
        return new ResponseEntity(answerResponseDTO, HttpStatus.OK);
    }

    // 채택 삭제 (false)
    @DeleteMapping("/{answer_id}/like")
    public ResponseEntity unLiked(@PathVariable("question_id") @Positive Long questionId,
                                  @PathVariable("answer_id") @Positive Long answerId) {
        Answer unLikedAnswer = likeService.deleteLike(answerId, questionId);
        AnswerResponseDTO answerResponseDTO = answerMapper.answerToAnswerResponseDTO(unLikedAnswer);
        return new ResponseEntity(answerResponseDTO, HttpStatus.OK);
    }
}