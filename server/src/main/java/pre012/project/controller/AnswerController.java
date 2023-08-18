package pre012.project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre012.project.dto.AnswerCreateDto;
import pre012.project.dto.AnswerPatchDto;
import pre012.project.entity.Answers;
import pre012.project.service.AnswerService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/answers") // 모든 메서드에서, 페이지로 이동하도록 수정이 필요.
public class AnswerController {

    private final AnswerService service;

    @GetMapping("/{answersId}")
    public Answers read(@PathVariable Long answersId) {
        Answers answers = service.findById(answersId);
        return answers;
    }

    @GetMapping("/all")
    public List<Answers> findAll() {
        return service.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Answers> create(@Validated @RequestBody AnswerCreateDto answerCreateDto) {
        Answers newAnswers = new Answers();
        newAnswers.setContent(answerCreateDto.getContent());
        newAnswers.setImage(answerCreateDto.getImage());
        newAnswers.setPostDate(answerCreateDto.getPostDate());

        service.createAnswer(newAnswers);
        return new ResponseEntity<>(newAnswers, HttpStatus.CREATED);
    }

    @PatchMapping("/{answerId}/patch")
    public ResponseEntity<Answers> patch(@Validated
                                            @PathVariable Long answerId,
                                         @RequestBody AnswerPatchDto answerPatchDto) {
        Answers answers = service.findById(answerId);

        answers.setContent(answerPatchDto.getContent());
        answers.setImage(answerPatchDto.getImage());
        answers.setPostDate(answerPatchDto.createTime());

        service.updateAnswer(answers);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}/delete")
    public ResponseEntity<Answers> delete(@PathVariable Long answerId) {
        Answers answers = service.findById(answerId);

        service.deleteAnswer(answers);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public String deleteAll() {
        String s = service.deleteAll();
        return s;
    }

}
