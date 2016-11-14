package com.example.models;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import java.time.LocalDateTime;

/**
 * Created by Cotel on 14/11/2016.
 */
public class ChartData {

    private String date;
    private int balance;

    public ChartData() {
    }

    public ChartData(String date, int balance) {
        this.date = date;
        this.balance = balance;
    }

    public void increment() {
        this.balance++;
    }

    public void decrement() {
        this.balance--;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "ChartData{" +
                "date=" + date +
                ", balance=" + balance +
                '}';
    }
}
