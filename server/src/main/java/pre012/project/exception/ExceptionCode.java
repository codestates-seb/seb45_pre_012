package pre012.project.exception;

import lombok.Getter;

public enum ExceptionCode {
    INVALID_SORT_PARAMETER(400, "Invalid Sort Parameter Name"),
    USER_NOT_FOUND(404, "User Not Found"),
    QUESTION_NOT_FOUND(404, "QUESTION Not Found"),
    ANSWER_NOT_FOUND(404, "ANSWER Not Found"),
    COMMENT_NOT_FOUND(404, "COMMENT Not Found"),
    ADOPTION_NOT_FOUND(404, "Adoption not found"),
    USER_EXISTS(409, "User Exists"),
    ADOPTION_EXISTS(409, "Adoption Exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
