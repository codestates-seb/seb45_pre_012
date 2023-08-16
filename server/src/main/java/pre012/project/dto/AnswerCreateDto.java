package pre012.project.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class AnswerCreateDto {

    @NotBlank
    @Size(min = 20)
    private String content;

    private String image;

    private String postDate;

    public AnswerCreateDto() { // 기본생성자가 없으면, json데이터를 객체로 변환하는 시점에서 오류가 발생.
        this.postDate = createTime();
    }

    public String createTime() { // 생성되는 시간을 만들어주는 메서드
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return now.format(format);
    }
}
