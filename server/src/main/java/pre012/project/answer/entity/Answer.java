package pre012.project.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre012.project.like.entity.Like;
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
    private LocalDateTime createdDate;

    @Column
    private LocalDateTime lastModifiedDate;

    @Column
    private Boolean liked; // 채택 여부

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @OneToOne(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Like like;


    // 질문 생성 날짜 갱신 메서드
    @PrePersist
    public void prePersist() {
        createdDate = LocalDateTime.now();
        lastModifiedDate = createdDate;
    }

    // 질문 수정 날짜 갱신 메서드
    @PreUpdate
    public void preUpdate() {
        lastModifiedDate = LocalDateTime.now();
    }

    public Answer() {
    }
}
