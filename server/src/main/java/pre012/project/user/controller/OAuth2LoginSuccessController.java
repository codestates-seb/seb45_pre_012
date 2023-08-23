package pre012.project.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pre012.project.user.service.UserService;
import pre012.project.user.entity.User;

@Controller
@RequiredArgsConstructor
public class OAuth2LoginSuccessController {
    private final UserService userService;
    @GetMapping("/user")
    public String loginSuccess(@AuthenticationPrincipal OAuth2User oauth2User, Model model) {
        if (oauth2User == null) {
            return "redirect:/login";
        }
        String provider = oauth2User.getName();
        String providerId = oauth2User.getAttribute("sub");

        User user = userService.getUserByProviderAndProviderId(provider, providerId);
        if (user == null) {
            user = new User();
            user.setSocialProvider(provider, providerId);
            user.setUserName(oauth2User.getAttribute("name"));
            userService.saveUser(user);
        }

        model.addAttribute("user", user);
        return "user";
    }
}
