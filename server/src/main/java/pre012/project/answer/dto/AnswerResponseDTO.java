package pre012.project.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDTO {
    private Long answerId;
    private Long questionId;
    private String answerContent;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
    private String userName;
    private boolean liked; // 추천 여부
}
