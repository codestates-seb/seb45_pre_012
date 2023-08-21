package pre012.project.users.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pre012.project.users.entity.Users;
import pre012.project.users.repository.UsersRepository;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Users createUser(String email, String password, String userName) {
        if (usersRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }
        if (usersRepository.findByuserName(userName).isPresent()) {
            throw new IllegalArgumentException("이미 사용 중인 이름입니다.");
        }
        Users users = new Users();
        users.setEmail(email);
        users.setPassword(passwordEncoder.encode(password));
       /* user.setpassword(password);*/
        users.setUserName(userName);

        return usersRepository.save(users);
    }


    public Users getUserByProviderAndProviderId(String provider, String providerId) {
        return usersRepository.findBySocialProviderAndProviderId(provider, providerId).orElse(null);
    }

    public void setSocialProvider(Users users, String provider, String providerId) {
        users.setSocialProvider(provider, providerId);
    }

    public Users saveUser(Users users) {
        return usersRepository.save(users);
    }


    public Users getUserByEmail(String email) {
        return usersRepository.findByEmail(email).orElse(null);
    }

    public boolean authenticateUser(String email, String password) {
        Users users = getUserByEmail(email);
        if (users != null) {
            return passwordEncoder.matches(password, users.getPassword());
        }
        return false;
    }

    public void deleteUserByEmail(String email) {
        Users users = getUserByEmail(email);
        if(users != null) {
            usersRepository.delete(users);
        }
    }
}
