package pre012.project.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private LocalDateTime createdDate;

    @Column
    private LocalDateTime lastModifiedDate;


    // 질문 생성 날짜 갱신 메서드
    @PrePersist
    public void prePersist(){
        createdDate = LocalDateTime.now();
        lastModifiedDate = createdDate;
    }

    // 질문 수정 날짜 갱신 메서드
    @PreUpdate
    public void preUpdate(){
        lastModifiedDate = LocalDateTime.now();
    }

    public Question() {
    }
}
