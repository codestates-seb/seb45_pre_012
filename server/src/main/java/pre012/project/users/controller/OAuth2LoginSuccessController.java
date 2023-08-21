package pre012.project.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pre012.project.users.entity.User;
import pre012.project.users.service.UserService;

@Controller
public class OAuth2LoginSuccessController {

    @Autowired
    private UserService userService;

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
