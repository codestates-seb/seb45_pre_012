package pre012.project.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre012.project.users.entity.Users;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);

    Optional<Users> findByuserName(String userName);

    Optional<Users> findBySocialProviderAndProviderId(String socialProvider, String providerId);
}
