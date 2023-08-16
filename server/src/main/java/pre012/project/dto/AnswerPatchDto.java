package pre012.project.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class AnswerPatchDto {

    private Long answerId;

    @NotBlank
    @Size(min = 20)
    private String content;

    private String image;

    private String postDate;

    public AnswerPatchDto() {
    }

    public String createTime() { // 생성되는 시간을 만들어주는 메서드
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return now.format(format);
    }
}


