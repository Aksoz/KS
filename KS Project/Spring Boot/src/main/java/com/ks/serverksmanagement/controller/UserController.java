package com.ks.serverksmanagement.controller;

import com.ks.serverksmanagement.jwt.JwtTokenProvider;
import com.ks.serverksmanagement.model.Role;
import com.ks.serverksmanagement.model.Sozlesme;
import com.ks.serverksmanagement.model.User;
import com.ks.serverksmanagement.service.SozlesmeService;
import com.ks.serverksmanagement.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider tokenProvider;
    @Autowired
    private UserService userService;

    @Autowired
    private SozlesmeService sozlesmeService;

    @PostMapping("/api/user/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if (userService.findBymail(user.getMail()) != null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        user.setRole(Role.USER);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }


    @GetMapping("/api/user/login")
    public ResponseEntity<?> getUser(Principal principal) {
        if (principal == null)
        {
            return ResponseEntity.ok(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) principal;

        User user = userService.findBymail(authenticationToken.getName());
        Authentication authentication = authenticationToken;
        user.setToken(tokenProvider.generateToken(authenticationToken));

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @GetMapping("/api/user/sozlesmeler")
    public ResponseEntity<?> getSozlesmes(Principal principal) {
        User user = userService.findBymail(principal.getName());
        Long size = sozlesmeService.numberOfSozlesmes();
        List<Sozlesme> sozlesmes = sozlesmeService.findAllSozlesmes();
        Long id = user.getId();
        List<Sozlesme> toReturn = new ArrayList<>();
        for(int i=0;i < size;i++)
        {
            if(sozlesmes.get(i).getTaraf1id() == id || sozlesmes.get(i).getTaraf2id() == id)
            {
                toReturn.add(sozlesmes.get(i));
            }
        }
        if(toReturn.size() == 0) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
}

