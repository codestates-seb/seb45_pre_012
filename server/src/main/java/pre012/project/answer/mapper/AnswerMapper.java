package pre012.project.answer.mapper;

import org.mapstruct.Mapper;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDTOtoAnswer(AnswerPostDTO answerPostDTO);
    Answer answerPatchDTOtoAnswer(AnswerPatchDTO answerPatchDTO);
    AnswerResponseDTO answerToAnswerResponseDTO(Answer answer);
    List<AnswerResponseDTO> answerListToAnswerResponseDTOList(List<Answer> answerList);
}
