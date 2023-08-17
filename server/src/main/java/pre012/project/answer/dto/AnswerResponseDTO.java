package pre012.project.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerResponseDTO {
    private Long answerId;
    private Long questionId;
    private String answerContent;
    private String nickName;
}
