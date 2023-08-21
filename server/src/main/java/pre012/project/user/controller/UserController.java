package pre012.project.user.controller;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import pre012.project.user.entity.User;
import pre012.project.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        userService.createUser(user.getEmail(), user.getPassword(), user.getUserName());
        return ResponseEntity.ok("회원가입 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        if (userService.authenticateUser(user.getEmail(), user.getPassword())) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    // 소셜 로그인 부분 (화면 뿌려주는)
    @GetMapping("/login")
    public ResponseEntity<String> loginUser(@AuthenticationPrincipal OAuth2User oauth2User) {
        String provider = oauth2User.getName();
        String providerId = oauth2User.getAttribute("sub");

        User user = userService.getUserByProviderAndProviderId(provider, providerId);
        if (user != null) {
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

        if (userService.authenticateUser(email, password)) {
            userService.deleteUserByEmail(email);
            return ResponseEntity.ok("회원 탈퇴 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("회원 탈퇴 실패");
        }
    }

    @PatchMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody User request) {
        User existingUser = userService.getUserByEmail(request.getEmail());

        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("사용자를 찾을 수 없습니다.");
        }
        existingUser.setPassword(passwordEncoder.encode(request.getPassword()));
        existingUser.setUserName(request.getUserName());

        userService.saveUser(existingUser);

        return ResponseEntity.ok("회원 정보 수정 성공");
    }
}
