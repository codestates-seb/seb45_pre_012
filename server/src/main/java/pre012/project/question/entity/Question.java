package pre012.project.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pre012.project.answer.entity.Answer;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "QUESTIONS")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false)
    @Lob
    private String content;

    @Column
    private Integer views;

    @Column
    private Integer answers; // 답변 개수

    @Column
    private boolean liked;

    @Column
    private LocalDateTime createdDate;

    @Column
    private LocalDateTime lastModifiedDate;

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answerList = new ArrayList<>();

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

    public Question() {
    }

}
