package pre012.project.users.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "`users`")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String userName;
    private String socialProvider; // = 구글 , 깃허브 로 로그인이 가능하다 하면, 구글 로그인시 구글..~ 이런식으로
    private String providerId; // 소셜로그인의 id값

    public void setSocialProvider(String provider, String providerId) {
        this.socialProvider = provider;
        this.providerId = providerId;
    }
}
