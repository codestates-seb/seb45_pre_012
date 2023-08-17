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

    @Column(name = "CONTENT")
    @NotBlank
    private String content;

    @Column(name = "IMAGE")
    private String image;

    @Column(name = "POSTDATE")
    @NotBlank
    private String postDate;

    @Column(name = "ISCHOICED")
    private boolean isChoiced;

    public Answers() {
    }
}
