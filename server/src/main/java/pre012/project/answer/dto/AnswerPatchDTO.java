package pre012.project.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDTO {
    private Long answerId;
    private String answerContent;
}
