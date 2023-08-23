package pre012.project.like.entity;

import lombok.Getter;
import lombok.Setter;
import pre012.project.answer.entity.Answer;
import pre012.project.question.entity.Question;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "LIKES")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeId;

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @OneToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;
}
