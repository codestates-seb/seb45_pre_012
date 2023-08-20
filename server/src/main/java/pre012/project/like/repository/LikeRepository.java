package pre012.project.like.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pre012.project.like.entity.Like;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
    // jpql
    @Query("SELECT a FROM Like a WHERE a.question.questionId = :questionId")
    Optional<Like> findByQuestionId(@Param("questionId") Long questionId);
}
