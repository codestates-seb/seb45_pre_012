package pre012.project.like.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pre012.project.answer.entity.Answer;
import pre012.project.answer.service.AnswerService;
import pre012.project.exception.BusinessLogicException;
import pre012.project.exception.ExceptionCode;
import pre012.project.like.entity.Like;
import pre012.project.like.repository.LikeRepository;
import pre012.project.question.entity.Question;
import pre012.project.question.service.QuestionService;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class LikeServiceImpl implements LikeService {
    private final LikeRepository likeRepository;
    private final AnswerService answerService;
    private final QuestionService questionService;

    public Answer createLike(Long answerId, Long questionId) {
        verifyExistsLike(questionId); // 이미 채택된 경우 예외 발생

        Question question = questionService.findExistsQuestion(questionId);
        Answer answer = answerService.findExistsAnswer(answerId);

        question.setLiked(true);
        answer.setLiked(true);

        Like like = new Like();
        like.setQuestion(question);
        like.setAnswer(answer);

        likeRepository.save(like);

        return answer;
    }

    public Answer deleteLike(Long answerId, Long questionId) {
        Like like = findExistsLike(questionId); // 채택이 존재하지 않을 경우 예외 발생

        Question question = questionService.findExistsQuestion(questionId);
        Answer answer = answerService.findExistsAnswer(answerId);

        question.setLiked(false);
        answer.setLiked(false);

        likeRepository.delete(like);

        return answer;
    }

    // 채택이 존재하지 않을 경우 예외 발생
    private Like findExistsLike(Long questionId) {
        Optional<Like> like = likeRepository.findByQuestionId(questionId);
        return like.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LIKE_NOT_FOUND));
    }

    // 이미 채택된 경우 예외 발생
    private void verifyExistsLike(Long questionId) {
        Optional<Like> like = likeRepository.findByQuestionId(questionId);
        if (like.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.LIKE_EXISTS);
        }
    }
}
