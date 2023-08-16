package pre012.project.question.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import pre012.project.question.dto.QuestionPatchDTO;
import pre012.project.question.dto.QuestionPostDTO;
import pre012.project.question.dto.QuestionResponseDTO;
import pre012.project.question.entity.Question;
import pre012.project.question.mapper.QuestionMapper;
import pre012.project.question.service.QuestionService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(QuestionController.class)
public class QuestionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper questionMapper;

    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    void postQuestionTest() throws Exception {
        // Given
        QuestionPostDTO postDTO = new QuestionPostDTO();
        postDTO.setTitle("Test Title");
        postDTO.setContent("Test Content");

        Question question = new Question();
        question.setQuestionId(1L);
        question.setTitle(postDTO.getTitle());
        question.setContent(postDTO.getContent());

        when(questionService.createQuestion(any(Question.class))).thenReturn(question);
        when(questionMapper.questionPostDTOtoQuestion(any(QuestionPostDTO.class))).thenReturn(question);

        // When & Then
        mockMvc.perform(post("/questions/ask")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(postDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.questionId").value(1L))
                .andExpect(jsonPath("$.title").value("Test Title"))
                .andExpect(jsonPath("$.content").value("Test Content"));
    }

    @Test
    void getQuestionsTest() throws Exception {
        // Given
        List<Question> questionList = new ArrayList<>();
        when(questionService.getAllQuestions()).thenReturn(questionList);
        when(questionMapper.questionListToQuestionResponseDTOList(anyList())).thenReturn(Collections.emptyList());

        // When & Then
        mockMvc.perform(get("/questions"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(questionList.size()));
    }

    @Test
    void getQuestionTest() throws Exception {
        // Given
        Long questionId = 1L;
        Question question = new Question();
        question.setQuestionId(questionId);
        question.setTitle("Test Title");
        question.setContent("Test Content");

        when(questionService.getQuestion(questionId)).thenReturn(question);

        QuestionResponseDTO responseDTO = QuestionResponseDTO.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                // Set other properties for the response DTO
                .build();

        when(questionMapper.questionToQuestionResponseDTO(any(Question.class))).thenReturn(responseDTO);

        // When & Then
        mockMvc.perform(get("/questions/{question_id}", questionId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.questionId").value(questionId))
                .andExpect(jsonPath("$.title").value("Test Title"))
                .andExpect(jsonPath("$.content").value("Test Content"));
    }

    @Test
    void patchQuestionTest() throws Exception {
        // Given
        Long questionId = 1L;

        QuestionPatchDTO patchDTO = new QuestionPatchDTO();
        patchDTO.setTitle("Updated Title");
        patchDTO.setContent("Updated Content");

        Question originalQuestion = new Question();
        originalQuestion.setQuestionId(questionId);
        originalQuestion.setTitle("Original Title");
        originalQuestion.setContent("Original Content");

        Question updatedQuestion = new Question();
        updatedQuestion.setQuestionId(questionId);
        updatedQuestion.setTitle(patchDTO.getTitle());
        updatedQuestion.setContent(patchDTO.getContent());

        when(questionService.updateQuestion(eq(questionId), any(Question.class))).thenReturn(updatedQuestion);
        when(questionMapper.questionPatchDTOtoQuestion(any(QuestionPatchDTO.class))).thenReturn(updatedQuestion);

        // When & Then
        mockMvc.perform(patch("/questions/edit/{question_id}", questionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(patchDTO)))
                .andExpect(status().isCreated());
    }


    private String asJsonString(Object obj) throws Exception {
        return objectMapper.writeValueAsString(obj);
    }
}
