package pre012.project.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pre012.project.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "ANSWERS")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    @Lob
    private String answerContent;

    @Column
    private LocalDateTime createDate;

    @Column
    private LocalDateTime lastModifiedDate;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public Answer() {
    }
}
