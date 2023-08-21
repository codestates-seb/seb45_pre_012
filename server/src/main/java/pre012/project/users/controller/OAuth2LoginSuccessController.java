package pre012.project.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pre012.project.users.entity.Users;
import pre012.project.users.service.UsersService;

@Controller
public class OAuth2LoginSuccessController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/user") // :8080/user, 소셜 회원가입
    public String loginSuccess(@AuthenticationPrincipal OAuth2User oauth2User, Model model) {
        if (oauth2User == null) {
            return "redirect:/login"; // 구글 로그인창으로 리다이렉트 되기로 예상.
        }
        String provider = oauth2User.getName();
        String providerId = oauth2User.getAttribute("sub");

        Users users = usersService.getUserByProviderAndProviderId(provider, providerId);
        if (users == null) {
            users = new Users();
            users.setSocialProvider(provider, providerId);
            users.setUserName(oauth2User.getAttribute("name"));
            usersService.saveUser(users);
        }

        model.addAttribute("user", users);
        return "user"; // 로그인 후 메인페이지로 가는 로직. 파일 이름을 수정해야함.
    }
}
