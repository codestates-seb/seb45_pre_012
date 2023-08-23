package pre012.project.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class QuestionResponseDTO {
    private Long questionId;
    private String title;
    private String content;
    private Integer views;
    private Integer answers;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
}
