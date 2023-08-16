package pre012.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre012.project.entity.Answers;

@Repository
public interface AnswerRepository extends JpaRepository<Answers, Long> {
}
