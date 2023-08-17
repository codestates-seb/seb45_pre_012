package pre012.project.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ANSWERS")
@Setter
@Getter
public class Answers {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(name = "CONTENT")
    private String content;

    @Column(name = "IMAGE")
    private String image;

    @Column(name = "POSTDATE")
    private String postDate;

    @Column(name = "ISCHOICED")
    private boolean isChoiced;

    public Answers() {
    }
}
