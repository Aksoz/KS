package com.ks.serverksmanagement.controller;

import com.ks.serverksmanagement.model.Sozlesme;
import com.ks.serverksmanagement.model.User;
import com.ks.serverksmanagement.service.SozlesmeService;
import com.ks.serverksmanagement.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private SozlesmeService sozlesmeService;

    @PostMapping("/api/admin/user-update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User existUser = userService.findBymail(user.getMail());
        if (existUser != null && !existUser.getId().equals(user.getId()))
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);

    }
    @DeleteMapping("/api/admin/user-delete")
    public ResponseEntity<?> deleteUser(@RequestBody User user){
        userService.deleteUser(user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-all")
    public ResponseEntity<?> findAllUsers() {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/api/admin/sozlesme-yarat")
    public ResponseEntity<?> createSozlesme(@RequestBody Sozlesme sozlesme)
    {
        return new ResponseEntity<>(sozlesmeService.saveSozlesme(sozlesme), HttpStatus.CREATED);
    }

    @PutMapping("/api/admin/sozlesme-update")
    public ResponseEntity<?> updateSozlesme(@RequestBody Sozlesme sozlesme)
    {
        return new ResponseEntity<>(sozlesmeService.updateSozlesme(sozlesme), HttpStatus.CREATED);

    }

    @DeleteMapping("/api/admin/sozlesme-sil")
    public ResponseEntity<?> deleteSozlesme(@RequestBody Sozlesme sozlesme)
    {
        sozlesmeService.deleteSozlesme(sozlesme.getId());
        return new ResponseEntity<>(HttpStatus.OK);

    }

}



