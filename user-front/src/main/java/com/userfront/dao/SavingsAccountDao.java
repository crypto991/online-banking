package com.userfront.dao;

import com.userfront.domain.SavingsAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingsAccountDao extends JpaRepository<SavingsAccount, Long> {
    SavingsAccount findByAccountNumber(int accountNumber);
}
