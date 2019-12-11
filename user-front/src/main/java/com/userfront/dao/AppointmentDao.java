package com.userfront.dao;

import com.userfront.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentDao extends JpaRepository<Appointment, Long> {
}
