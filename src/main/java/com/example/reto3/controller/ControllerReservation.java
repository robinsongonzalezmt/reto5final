package com.example.reto3.controller;

import com.example.reto3.service.ReservationService;
import com.example.reto3.entities.DTOs.CompletedAndCancelled;
import com.example.reto3.entities.DTOs.TotalAndClient;
import com.example.reto3.entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")

public class ControllerReservation {
@Autowired
    private ReservationService reservationService;
@GetMapping("/all")
    public List<Reservation> getAll(){return reservationService.getAll();}


    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("id") int id){
        return reservationService.getReservation(id);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation p) {return reservationService.save(p);}


    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation p){ return reservationService.update(p);}

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){return reservationService.delete(id);}

    @GetMapping("/report-dates/{fecha1}/{fecha2}")
    public List<Reservation> getReservationBetweenDatesReport(@PathVariable("fecha1") String fecha1,@PathVariable("fecha2") String fecha2){
    return reservationService.getReservationBetweenDatesReport(fecha1, fecha2);
    }

    @GetMapping("/report-status")
    public CompletedAndCancelled getReservationStatusReport(){
        return reservationService.getReservationStatusReport();
}
    @GetMapping("/report-clients")
    public List<TotalAndClient> getTopClientsReport(){
        return reservationService.getTopClientsReport();
    }

}
