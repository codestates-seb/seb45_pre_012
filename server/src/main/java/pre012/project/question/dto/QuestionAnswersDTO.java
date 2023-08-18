package pre012.project.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionAnswersDTO<T> {
    private T question;
    private T answerList;
}
