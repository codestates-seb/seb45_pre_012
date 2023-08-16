package pre012.project.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre012.project.question.dto.QuestionPatchDTO;
import pre012.project.question.dto.QuestionPostDTO;
import pre012.project.question.dto.QuestionResponseDTO;
import pre012.project.question.entity.Question;
import pre012.project.question.mapper.QuestionMapper;
import pre012.project.question.service.QuestionService;
import pre012.project.question.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    // 질문 등록
    @PostMapping("/ask")
    public ResponseEntity postQuestion(@RequestBody QuestionPostDTO questionPostDTO) {
        Question question = questionService.createQuestion(mapper.questionPostDTOtoQuestion(questionPostDTO));
        URI location = UriCreator.createUri("/questions", question.getQuestionId());
        return ResponseEntity.created(location).body(question);
    }

    // 전체 질문 조회
    // 페이징 기능 추가
    // - 한 페이지에 15개씩 'lastModifiedDate' 기준으로 정렬 (수정된 질문은 최근 질문으로 구분)
    @GetMapping
    public ResponseEntity<List<QuestionResponseDTO>> getQuestions(
            @RequestParam(required = false, defaultValue = "1") @Positive int page,
            @RequestParam(required = false, defaultValue = "15") @Positive int size,
            @RequestParam(required = false, defaultValue = "lastModifiedDate") String recent,
            @RequestParam(required = false, defaultValue = "DESC") String sort) {

        Page<Question> pageQuestions = questionService.getPagingAllQuestions(page - 1, size, recent, sort);
        List<Question> questionList = pageQuestions.getContent();

        List<QuestionResponseDTO> questionResponseDTOList = mapper.questionListToQuestionResponseDTOList(questionList);

        return new ResponseEntity<>(questionResponseDTOList, HttpStatus.OK);
    }

    // 특정 id로 질문 조회
    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") @Positive Long questionId) {
        Question question = questionService.getQuestion(questionId);
        QuestionResponseDTO questionResponseDTO = mapper.questionToQuestionResponseDTO(question);
        return new ResponseEntity(questionResponseDTO, HttpStatus.OK);
    }

    // 질문 수정
    @PatchMapping("/edit/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive Long questionId,
                                        @RequestBody @Valid QuestionPatchDTO questionPatchDTO) {
        Question question = questionService.updateQuestion(questionId, mapper.questionPatchDTOtoQuestion(questionPatchDTO));
        URI location = UriCreator.createUri("/questions", question.getQuestionId());
        return ResponseEntity.created(location).build();
    }

    // 질문 삭제
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
