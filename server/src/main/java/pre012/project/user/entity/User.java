package pre012.project.user.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String userName;
    private String socialProvider;
    private String providerId;

    public void setSocialProvider(String provider, String providerId) {
        this.socialProvider = provider;
        this.providerId = providerId;
    }
}
