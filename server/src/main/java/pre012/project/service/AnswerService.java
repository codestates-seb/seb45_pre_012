package pre012.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre012.project.entity.Answers;
import pre012.project.repository.AnswerRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository repository;

    public Answers findById(Long answerId) {
        return repository.findById(answerId).orElseThrow(() -> new NoSuchElementException("없는 Id입니다"));
    }

    public void createAnswer(Answers answers) {
        repository.save(answers);
    }

    public void updateAnswer(Answers answers) {
        repository.save(answers);
    }

    public void deleteAnswer(Answers answers) {
        repository.delete(answers);
    }

    public List<Answers> findAll() {
        return repository.findAll();
    }

    public String deleteAll() {
        repository.deleteAll();
        return "전부삭제";
    }

}
