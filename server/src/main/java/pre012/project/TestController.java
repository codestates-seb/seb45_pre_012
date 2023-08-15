package pre012.project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String hello() {
        return "hello";
    }

    @GetMapping("/test/test")
    public String hello2() {
        return "hello2~!@#!@#!@$";
    }
}
