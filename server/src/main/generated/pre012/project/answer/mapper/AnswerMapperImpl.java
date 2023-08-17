package pre012.project.answer.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre012.project.answer.dto.AnswerPatchDTO;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-17T16:03:43+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.8 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDTOtoAnswer(AnswerPostDTO answerPostDTO) {
        if ( answerPostDTO == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerContent( answerPostDTO.getAnswerContent() );

        return answer;
    }

    @Override
    public Answer answerPatchDTOtoAnswer(AnswerPatchDTO answerPatchDTO) {
        if ( answerPatchDTO == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDTO.getAnswerId() );
        answer.setAnswerContent( answerPatchDTO.getAnswerContent() );

        return answer;
    }

    @Override
    public AnswerResponseDTO answerToAnswerResponseDTO(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDTO answerResponseDTO = new AnswerResponseDTO();

        answerResponseDTO.setAnswerId( answer.getAnswerId() );
        answerResponseDTO.setAnswerContent( answer.getAnswerContent() );
        answerResponseDTO.setCreatedDate( answer.getCreatedDate() );
        answerResponseDTO.setLastModifiedDate( answer.getLastModifiedDate() );

        return answerResponseDTO;
    }
}