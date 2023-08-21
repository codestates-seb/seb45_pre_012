package pre012.project.exception;

import lombok.Getter;

public enum ExceptionCode {
    INVALID_SORT_PARAMETER(400, "INVALID SORT PARAMETER NAME"),
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    QUESTION_NOT_FOUND(404, "QUESTION NOT FOUND"),
    ANSWER_NOT_FOUND(404, "ANSWER NOT FOUND"),
    COMMENT_NOT_FOUND(404, "COMMENT NOT FOUND"),
    LIKE_NOT_FOUND(404, "LIKE NOT FOUND"),
    USER_EXISTS(409, "USER EXISTS"),
    LIKE_EXISTS(409, "LIKE EXISTS"),
    NOT_IMPLEMENTATION(501, "NOT IMPLEMENTATION");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
