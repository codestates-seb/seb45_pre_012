package pre012.project;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final String s3URL = "http://prepro012.s3-website.ap-northeast-2.amazonaws.com";

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(s3URL)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Authorization")
                .maxAge(3000);
    }
}
