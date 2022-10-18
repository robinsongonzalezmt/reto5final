package com.example.reto3.controller;

import com.example.reto3.service.AdminService;
import com.example.reto3.entities.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Admin")
public class ControllerAdmin {

    @Autowired
    private AdminService adminService;
    
    @GetMapping("/all")
    public List<Admin> getAll() {return adminService.getAll();}

    @GetMapping("/{id}")
    public Optional<Admin> getAdmin(@PathVariable("id") int id){return adminService.getAdmin(id);}



    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin save(@RequestBody Admin p) { return adminService.save(p);}

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin update(@RequestBody Admin p){ return adminService.update(p);}

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){return adminService.delete(id);}
}
