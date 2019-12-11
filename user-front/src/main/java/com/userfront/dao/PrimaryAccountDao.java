package com.userfront.dao;

import com.userfront.domain.PrimaryAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrimaryAccountDao extends JpaRepository<PrimaryAccount, Long> {
    PrimaryAccount findByAccountNumber(int accountNumber);
}
