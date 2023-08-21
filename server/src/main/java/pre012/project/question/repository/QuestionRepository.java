package pre012.project.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre012.project.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
