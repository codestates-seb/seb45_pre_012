package pre012.project.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PageInfo {
    private Integer page;
    private Integer size;
    private Long totalElements;
    private Integer totalPages;
}