package pre012.project.answer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;
import pre012.project.answer.dto.AnswerPostDTO;
import pre012.project.answer.dto.AnswerResponseDTO;
import pre012.project.answer.service.AnswerService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AnswerController.class)
class AnswerControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AnswerService answerService;

    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    void postAnswerTest() throws Exception {
        // Given
        Long questionId = 1L;

        AnswerPostDTO postDTO = new AnswerPostDTO();
        postDTO.setAnswerContent("Test Answer Content");

        AnswerResponseDTO answerResponseDTO = new AnswerResponseDTO();
        answerResponseDTO.setAnswerId(1L);
        answerResponseDTO.setQuestionId(questionId);
        answerResponseDTO.setAnswerContent(postDTO.getAnswerContent());

        when(answerService.createAnswer(eq(questionId), any(AnswerPostDTO.class))).thenReturn(answerResponseDTO);

        // When & Then
        mockMvc.perform(post("/questions/{question_id}/answers", questionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(postDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.answerId").value(1L))
                .andExpect(jsonPath("$.questionId").value(questionId))
                .andExpect(jsonPath("$.answerContent").value("Test Answer Content"));
    }
}