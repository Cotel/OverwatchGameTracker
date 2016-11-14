package com.example.controllers;

import com.example.models.ChartData;
import com.example.models.Game;
import com.example.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Cotel on 14/11/2016.
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/api")
public class ChartDataAPIController {

    @Autowired private GameRepository repository;

    @RequestMapping(method = RequestMethod.GET, value="/chartData")
    public List<ChartData> getChartData() {
        ArrayList<ChartData> chartData = new ArrayList<>();
        ArrayList<String> dates = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM");

        for(Game g: repository.findAll()) {
            String auxGameDate = formatter.format(g.getDate());
            if(dates.contains(auxGameDate)) {
                for(ChartData d: chartData) {
                    if(d.getDate().equals(auxGameDate)) {
                        if(g.isWinned()) {
                            d.increment();
                        } else {
                            d.decrement();
                        }
                    }
                }
            } else {
                ChartData aux = new ChartData(auxGameDate, 0);
                if(g.isWinned()) {
                    aux.increment();
                } else {
                    aux.decrement();
                }
                chartData.add(aux);
                dates.add(auxGameDate);
            }
        }

        return chartData;
    }

    public void setRepository(GameRepository repository) {
        this.repository = repository;
    }
}
