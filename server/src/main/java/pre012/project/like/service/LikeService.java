package pre012.project.like.service;

import org.springframework.stereotype.Service;
import pre012.project.answer.entity.Answer;

@Service
public interface LikeService {
    Answer createLike(Long answerId, Long questionId);

    Answer deleteLike(Long answerId, Long questionId);
}
