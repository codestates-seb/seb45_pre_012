package pre012.project.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "answers")
@Setter
@Getter
public class Answers {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @NotBlank
    private String content;

    private String image;

    @NotBlank
    private String postDate;

    private boolean isChoiced;

    public Answers() {
    }
}
