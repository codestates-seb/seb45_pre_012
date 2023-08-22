package pre012.project.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import pre012.project.users.entity.Users;
import pre012.project.users.service.UsersService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UsersService usersService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody Users user) {
        usersService.createUser(user.getEmail(), user.getPassword(), user.getUserName());
        return ResponseEntity.ok("회원가입 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Users user) {
        if (usersService.authenticateUser(user.getEmail(), user.getPassword())) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    @GetMapping("/login") // 리퀘스트 매핑이 듣지않음. :8080/login으로 매핑됨. 소셜로그인 요청
    public ResponseEntity<String> loginUser(@AuthenticationPrincipal OAuth2User oauth2User) {
        String provider = oauth2User.getName();
        String providerId = oauth2User.getAttribute("sub");

        Users users = usersService.getUserByProviderAndProviderId(provider, providerId);
        if (users != null) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok("로그아웃 성공");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        if (usersService.authenticateUser(email, password)) {
            usersService.deleteUserByEmail(email);
            return ResponseEntity.ok("회원 탈퇴 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("회원 탈퇴 실패");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody Users request) {
        Users existingUsers = usersService.getUserByEmail(request.getEmail());

        if (existingUsers == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("사용자를 찾을 수 없습니다.");
        }
        existingUsers.setPassword(passwordEncoder.encode(request.getPassword()));
        existingUsers.setUserName(request.getUserName());

        usersService.saveUser(existingUsers);

        return ResponseEntity.ok("회원 정보 수정 성공");
    }
}