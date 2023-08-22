package pre012.project.users.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8080", "http://localhost:3000",
                        "http://ec2-52-78-149-75.ap-northeast-2.compute.amazonaws.com",
                        "http://prepro012.s3-website.ap-northeast-2.amazonaws.com")
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedMethods("*");
    }
}
