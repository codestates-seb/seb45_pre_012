package pre012.project.question.mapper;

import org.mapstruct.Mapper;
import pre012.project.question.dto.QuestionPostDTO;
import pre012.project.question.dto.QuestionResponseDTO;
import pre012.project.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDTOtoQuestion(QuestionPostDTO questionPostDTO) {
        Question question = new Question();
        question.setTitle(questionPostDTO.getTitle());
        question.setContent(questionPostDTO.getContent());
        question.setViews(0);
        return question;
    }

    default List<QuestionResponseDTO> questionListToQuestionResponseDTOList(List<Question> questionList) {
        return questionList
                .stream()
                .map(question -> QuestionResponseDTO
                        .builder()
                        .questionId(question.getQuestionId())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .views(question.getViews())
                        .createdDate(question.getCreatedDate())
                        .lastModifiedDate(question.getLastModifiedDate())
                        .build())
                .collect(Collectors.toList());
    }

    default QuestionResponseDTO questionToQuestionResponseDTO(Question question) {
        return QuestionResponseDTO.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                .views(question.getViews())
                .createdDate(question.getCreatedDate())
                .lastModifiedDate(question.getLastModifiedDate())
                .build();
    }
}